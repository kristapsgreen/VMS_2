import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';

export default function NoPage() {
    const [parole, setPassword] = React.useState(null);
    const [formError, setformError] = React.useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!parole) {
          setformError('Aizpildiet lauciņus');
          return;
        }
        const { data, error } = await supabase.auth.updateUser({password: parole})

        if (error) {
            alert(error.message);
          } 
        if(data) {
            alert('Parole nomainīta veiksmīgi veiksmīgi');
            setPassword('');
        }
    }


    return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Jaunā parole"
              className="form-input"
              value={parole}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="form-submit-btn">
              Nomainīt Paroli
            </button>
            {formError && <p className="form-error">{formError}</p>}
          </form>
        </div>
      );
}
