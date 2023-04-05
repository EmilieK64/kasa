import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Error from './components/Error/index';
import About from './pages/About';
import Logement from './pages/Logement';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path='/' element= {<Home />} />
            <Route path='/about' element= {<About />} />
            <Route path='/logement/:id' element= {<Logement />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        <Footer />
  </BrowserRouter>
)
