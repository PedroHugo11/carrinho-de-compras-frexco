import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/order';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<Order/>} />
    </Routes>
  );
};

export default Rotas;
