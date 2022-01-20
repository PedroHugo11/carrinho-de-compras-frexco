import React from 'react';
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import {
  Grid,
  Box,
} from "@material-ui/core";

import { Container, ProductTable, Total } from './styles';

import { useCart } from '../../hook/useCart';
import { Product } from '../../types';

const Cart = (): JSX.Element => {

  const { cart, removeProduct, updateProductAmount  } = useCart();

  function handleProductIncrement(product: Product) {
    updateProductAmount({productId: product.id, amount: product.amount + 1})
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({productId: product.id, amount: product.amount - 1})
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }
  
  /*cart.map(product => {
    console.log(product);
  });*/

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Container>
              <ProductTable>
                <thead>
                  <tr>
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>CALORIAS</th>
                    <th aria-label="delete icon" />
                  </tr>
                </thead>
                <tbody>
                  {cart.map(product => (
                    <tr key={product.id}>
                      <td>
                        <strong>{product.name}</strong>
                      </td>
                      <td>
                        <div>
                          <button
                            type="button"
                            disabled={product.amount <= 1}
                            onClick={() => handleProductDecrement(product)}
                          >
                            <MdRemoveCircleOutline size={20} />
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={product.amount}
                          />
                          <button
                            type="button"
                            onClick={() => handleProductIncrement(product)}
                          >
                            <MdAddCircleOutline size={20} />
                          </button>
                        </div>
                      </td>
                      <td>
                        <strong>{product.nutritions.calories}</strong>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          <MdDelete size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ProductTable>

              <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                  <span>TOTAL CALÓRICO:</span>
                  <strong>104</strong>
                </Total>
              </footer>
            </Container>  
          </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
