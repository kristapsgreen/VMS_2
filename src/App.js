import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.js';
import NoPage from './pages/NoPage.js';
import InputPage from './pages/InputPage.js';
import ViewPage from './pages/ViewPage.js'; 



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