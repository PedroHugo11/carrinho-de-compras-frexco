import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.png';
import { Container, Cart } from './styles';


const Header = (): JSX.Element => {
  // const { cart } = useCart();
  // const cartSize = // TODO;

  return (
    <Container>
        <Link to="/">
          <img src={logo} alt="Frexco" />
        </Link>
      
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {/* {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`} */}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
    </Container>
  );
};

export default Header;
