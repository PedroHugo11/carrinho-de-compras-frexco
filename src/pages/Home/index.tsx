import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart, MdHelp } from 'react-icons/md';

import { ProductList } from './styles';

import api from '../../services/api';
import { Product } from '../../types';

import { useCart } from '../../hook/useCart';

import {
  Grid,
  Box,
} from "@material-ui/core";

const Home = (): JSX.Element => {

  const [products, setProducts] = useState<Product[]>([]);
  const { addProduct } = useCart();

  useEffect(() => {
    api.get('/fruit/all').then(({data}) => {
      console.log("teste" + data);
      setProducts(data);
    });
  }, []);

  function handleAddProduct(product: Product) {
    addProduct(product)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={12} md={4}>
          <ProductList>
            <li key={product.id}>
              <strong>{product.name}</strong>
              <div>
                  <MdHelp size={22} color="#88BC22" />
              </div>
              <button
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {/* {cartItemsAmount[product.id] || 0} */} 2
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          </ProductList>
        </Grid>
      ))}
      </Grid>
    </Box>
    
    
  );
};

export default Home;
