import { createContext, ReactNode, useContext, useState } from "react";

import api from '../services/api';
import { Product } from '../types';

interface CartContextData {
    cart: Product[];
    addProduct: (product: Product) => Promise<void>;
}

interface CartProviderProps {
    children: ReactNode;
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
        
        /* const productAlreadyExists = cart.find(
          product => product.id === productId
        );*/
  
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
  
    
    return (
      <CartContext.Provider
        value={{ cart, addProduct }}
      >
        {children}
      </CartContext.Provider>
    );
  }

export const useCart = (): CartContextData => {
    const context = useContext(CartContext);
  
    return context;
}