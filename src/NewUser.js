import React from 'react';
import './index.css';
import supabase  from './supabaseClient.js'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react';



export default function NewUser() {
    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [vards, setVards] = React.useState('');
  // const [uzvards, setUzvards] = React.useState('');
    
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
      return(
        <div>
            <h1>Pierakstīties</h1>
            <form onSubmit={handleLogin}>
      <label>
        Epasts:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {"\n"}
      <label>
        Parole:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {/* <label>
        Vards:
        <input type="text" value={vards} onChange={(e) => setVards(e.target.value)} />
      </label>
      <label>
        Uzvārds:
        <input type="text" value={uzvards} onChange={(e) => setUzvards(e.target.value)} />
      </label> */}
      <button type="submit">Ielogotes</button>
    </form>
        </div>
      )
    }
