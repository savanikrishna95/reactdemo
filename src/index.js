import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/reactdemo" element={<Home />} />
        <Route path="/reactdemo/product" element={<Products />} />
        <Route path="/reactdemo/product/:id" element={<Product />} />
        <Route path="/reactdemo/about" element={<AboutPage />} />
        <Route path="/reactdemo/contact" element={<ContactPage />} />
        <Route path="/reactdemo/cart" element={<Cart />} />
        <Route path="/reactdemo/login" element={<Login />} />
        <Route path="/reactdemo/register" element={<Register />} />
        <Route path="/reactdemo/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/reactdemo/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);