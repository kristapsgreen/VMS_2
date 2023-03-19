import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

export default function SignOut() {
  const handleLogOut = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error.message);
    } 
    if (!error){
      alert('You have been signed out');
    }
  } 
    
  return(
    <div className="signout-container">
      <button className="signout-button" onClick={handleLogOut}>Izlogoties</button>
    </div>
  );
}
