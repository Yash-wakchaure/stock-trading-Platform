import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import './index.css';

import HomePage from './landing_page/home/HomePage';
import Pricing from './landing_page/pricing/PricingPage';
import Products from './landing_page/product/ProductPage';
import Support from './landing_page/support/SupportPage';
import SignUp from './landing_page/signup/SignUp';
import Login from './landing_page/login/Login';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

import DashboardHome from './dashboard/components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardHome />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);

