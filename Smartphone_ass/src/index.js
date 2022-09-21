import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Smartphone from './Smartphone';
import AddSmartphone from './AddSmartphone';
import EditSmartphone from './EditSmartphone';
import Smartphonedetails from './Smartphonedetails';
import Home from './Home';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <BrowserRouter>
          <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='About' element={<About/>}></Route>
                <Route path='Smartphone' element={<Smartphone/>}></Route>
                <Route path='Smartphone/AddSmartphone' element={<AddSmartphone/>}></Route>
                <Route path='Smartphone/:id' element={<Smartphonedetails/>}></Route>
                <Route path='Smartphone/EditSmartphone/:id' element={<EditSmartphone/>}></Route>
                </Route>
          </Routes>
    </BrowserRouter> 
    </>
);

