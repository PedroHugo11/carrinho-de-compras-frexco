import {
    Grid,
    Box,
  } from "@material-ui/core";

import { Container, ProductTable, Total } from './styles';

import { useCart } from '../../hook/useCart';

const Order = (): JSX.Element => {

    const { cart } = useCart();

    const cartWithSubtotal = cart.map(product => ({
        ...product,
        subTotal: product.nutritions.calories * product.amount
    }));

    const total = cart.reduce((sumTotal, product) => {
        return sumTotal += product.nutritions.calories * product.amount;
    }, 0);

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Container>
                        <h1>Ordem do Pedido</h1>
                        <ProductTable>
                            <thead>
                            <tr>
                                <th>PRODUTO</th>
                                <th>QTD</th>
                                <th>CALORIAS</th>
                            </tr>
                            </thead>
                            <tbody>
                                {cartWithSubtotal.map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <strong>{product.name}</strong>
                                        </td>
                                        <td>
                                            <strong>{product.amount}</strong>
                                        </td>
                                        <td>
                                            <strong>{product.subTotal}</strong>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </ProductTable>
                        <footer>
                            <Total>
                                <span>TOTAL CALÓRICO:</span>
                                <strong>{total}</strong>
                            </Total>
                        </footer>
                    </Container>
                </Grid>
          </Grid>
        </Box>
        
    )
};

export default Order;
