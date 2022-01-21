import { createContext, ReactNode, useContext, useState } from "react";

import api from '../services/api';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
    cart: Product[];
    addProduct: (product: Product) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<Product[]>(() => {
      const storagedCart = localStorage.getItem('@frexco');
  
      if (storagedCart) {
        return JSON.parse(storagedCart);
      }
  
      return [];
    });
  
    const addProduct = async (product: Product) => {
      try {
        
        const productAlreadyExists = cart.find(
          itemProduct => itemProduct.id === product.id
        );
  
        if (productAlreadyExists) {

          const { amount: productAmount } = productAlreadyExists;
  
          const updatedAmountCartProduct = cart.map(itemProduct => {
            return itemProduct.id === product.id
              ? {...product, amount: productAmount + 1 } 
              : product;
          });
    
          setCart(updatedAmountCartProduct);
    
          localStorage.setItem(
            '@frexco',
            JSON.stringify(updatedAmountCartProduct)
          );
  
          return;
        }

  
        const cartWithNewProduct = [...cart, { ...product, amount: 1 }];
        setCart(cartWithNewProduct);
  
        localStorage.setItem(
          '@frexco',
          JSON.stringify(cartWithNewProduct)
        );
      } catch {
        console.log('error na adição')
      }
    };

    const removeProduct = (productId: number) => {
      try {

        const productAlreadyExists = cart.find(
          product => product.id === productId
        );
  
        if (!productAlreadyExists) throw Error();
  
        const filteredCart = cart.filter(product => product.id !== productId);
  
        setCart(filteredCart);
  
        localStorage.setItem('@frexco', JSON.stringify(filteredCart));
      } catch {
        console.log('Erro na remoção do produto');
      }
    };

    const updateProductAmount = async ({
      productId,
      amount
    }: UpdateProductAmount) => {
      try {
        if (amount < 1) return;
  
        const updatedAmountCartProduct = cart.map(product => {
          return product.id === productId ? { ...product, amount } : product;
        });
  
        setCart(updatedAmountCartProduct);
  
        localStorage.setItem(
          '@frexco',
          JSON.stringify(updatedAmountCartProduct)
        );
      } catch {
        console.log('Erro na alteração de quantidade do produto');
      }
    };
  
    
    return (
      <CartContext.Provider
        value={{ cart, addProduct, removeProduct, updateProductAmount }}
      >
        {children}
      </CartContext.Provider>
    );
  }

export const useCart = (): CartContextData => {
    const context = useContext(CartContext);
    return context;
}