import React from 'react';
import './index.css';
import supabase  from './supabaseClient.js'
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import SignOut from './SignOut.js'


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
        if (error) {
          alert(error.message);
        } else {
          alert('Pierakstijies veiksmīgi');
          console.log(SupabaseClient)
          // TODO: Redirect to the user's dashboard or home page
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
            <input type="email" 
            placeholder='E-pasts'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="password"
             placeholder='Parole'
             value={password} 
             onChange={(e) => setPassword(e.target.value)} />
             <button type='submit'>Ielogietis</button>
             </form>
            {"\n"}
            <SignOut />
        </div>
    );
}