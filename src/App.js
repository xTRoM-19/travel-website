import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Routes,  Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Pages/Home'; 
import Services from './components/Pages/Services';
import Product from './components/Pages/Product';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
