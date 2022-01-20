import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import { CartProvider } from './hook/useCart'
import Header from './components/Header';
import Routes from './routes';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
