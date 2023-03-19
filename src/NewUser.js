import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

export default function NewUser() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      alert(error.message);
    } else {
      console.log(SupabaseClient)
      alert('Konts izveidots veiksmīgi');
      // TODO: Redirect to the user's dashboard or home page
    }
  };

  return (
    <div className="newuser-container">
      <h1 className="newuser-heading">Pierakstīties</h1>
      <form className="newuser-form" onSubmit={handleLogin}>
        <div className="newuser-form-item">
          <label htmlFor="email">Epasts:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="newuser-form-item">
          <label htmlFor="password">Parole:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="newuser-form-button" type="submit">Ielogoties</button>
      </form>
    </div>
  )
}
