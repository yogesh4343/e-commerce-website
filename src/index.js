import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppContext} from './Context/ProductContext';
import { CartContext } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContext>
      <AppContext >
          <App />
      </AppContext>
    </CartContext>
  </React.StrictMode>
);