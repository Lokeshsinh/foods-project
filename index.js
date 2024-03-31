import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Header />
  <Routes>
    <Route path ="/home" element = {<Home />} />
    <Route path ="/menu" element = {<Menu />} />
    <Route path ="/about" element = {<About />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);


