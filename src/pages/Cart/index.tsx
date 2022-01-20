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

const Cart = (): JSX.Element => {

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
                  <tr>
                    <td>
                      <strong>Apple</strong>
                    </td>
                    <td>
                      <div>
                        <button
                          type="button"
                        >
                          <MdRemoveCircleOutline size={20} />
                        </button>
                        <input
                          type="text"
                          readOnly
                          value={2}
                        />
                        <button
                          type="button"
                          data-testid="increment-product"
                        >
                          <MdAddCircleOutline size={20} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>104</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-testid="remove-product"
                      // onClick={() => handleRemoveProduct(product.id)}
                      >
                        <MdDelete size={20} />
                      </button>
                    </td>
                  </tr>
                  
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
