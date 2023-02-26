import React from 'react'
import "./App.css"
import About from "./About";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Page from './Page';
import Error from './Error';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/e-commerce-website" element={<Home />}  />
        <Route path="/about/" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
