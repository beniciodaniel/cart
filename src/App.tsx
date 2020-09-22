import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { CartProvider } from './context/CartContext';

import GlobalStyles from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes />
      </CartProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
