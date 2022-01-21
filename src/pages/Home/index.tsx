import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart, MdHelp, MdClear } from 'react-icons/md';

import { ProductList } from './styles';

import api from '../../services/api';
import { Product } from '../../types';
import { useCart } from '../../hook/useCart';

import {
  Grid,
  Box,
} from "@material-ui/core";

import Modal from "react-modal";

Modal.setAppElement("#root");

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {

  const [products, setProducts] = useState<Product[]>([]);
  const { addProduct, cart } = useCart();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>();

  function toggleModal(product:Product | null) {
    setSelectedProduct(product);
    setIsOpenModal(!isOpenModal);
  }

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount

    return sumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    api.get('/fruit/all').then(({data}) => {
      setProducts(data);
    });
  }, []);

  function handleAddProduct(product: Product) {
    addProduct(product)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {products.map(product => {
        console.log(product);
        return (
        <Grid item xs={12} sm={12} md={4}>
          <ProductList>
            <li key={product.name}>
              <strong>{product.name}</strong>
              <div>
                <button
                  onClick={() => toggleModal(product)}
                >
                  <Modal
                    isOpen={isOpenModal}
                    onRequestClose={() => toggleModal(null)}
                    contentLabel="My dialog"
                    className="myModal"
                    overlayClassName="overlayModal"
                  >
                    <div className='nameProduct'>
                      <strong>{selectedProduct?.name}</strong>
                      <button onClick={() => toggleModal(null)}>
                        <MdClear size={16} color="#88BC22" />
                      </button>
                    </div>
                    <div className='infoNutritional'>
                      <p>Carboidratos: {selectedProduct?.nutritions?.carbohydrates}</p>
                      <p>Proteínas:a</p>
                      <p>Gorduras: a</p>
                      <p>Calorias:</p>
                      <p>Açucar:a</p>
                    </div>         
                  </Modal>
                  <MdHelp size={22} color="#88BC22" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          </ProductList>
        </Grid>
        );
      })}
      </Grid>
    </Box>    
  );
};

export default Home;
