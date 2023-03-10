import React from 'react';
import './index.css';
import supabase  from './supabaseClient.js'
import { SupabaseClient, createClient } from '@supabase/supabase-js'



export default function signOut() {
    const handleLogOut = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut() 
      if (error) {
        alert(error.message);
      } 
      if (!error){
        alert('You have been signed out')
      }
    } 
    
    return(
        <div>
            <button onClick={handleLogOut}>Izlogoties</button>
        </div>
    )
}