import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import NoPage from './NoPage.js';
import InputPage from './InputPage.js';
import ViewPage from './ViewPage.js'; 
import './index.css';


export default function App(){

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="Viewpage" element={<ViewPage />} />
        <Route path="Inputpage" element={<InputPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}