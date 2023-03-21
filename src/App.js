import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import NoPage from './NoPage.js';
import InputPage from './InputPage.js';
import ViewPage from './ViewPage.js'; 
import './index.css';
import NewUser from './NewUser';
import PasswordChange from './passwordChange';

// lai nepazaudētu svarīgi supabase - DROP FUNCTION IF EXISTS handle_new_user cascade; 


export default function App(){

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="Viewpage" element={<ViewPage />} />
        <Route path="Inputpage" element={<InputPage />} />
        <Route path="Login" element={<Login />} />
        <Route path="NewUser" element={<NewUser />} />
        <Route path="*" element={<NoPage />} />
        <Route path="passwordChange" element={<PasswordChange />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}