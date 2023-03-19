import React from 'react';
import supabase from './supabaseClient.js';
import SignOut from './SignOut.js';
import './index.css';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Pierakstijies veiksmīgi');
      // TODO: Redirect to the user's dashboard or home page
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="login-input-container">
          <label className="login-label" htmlFor="email">
            E-pasts:
          </label>
          <input
            className="login-input"
            type="email"
            id="email"
            placeholder="Ievadiet savu e-pastu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-container">
          <label className="login-label" htmlFor="password">
            Parole:
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            placeholder="Ievadiet savu paroli"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" type="submit">
          Ielogoties
        </button>
      </form>
      <SignOut />
    </div>
  );
}
