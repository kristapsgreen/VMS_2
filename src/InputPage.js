import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import supabase from './supabaseClient.js';

export default function InputPage() {
  const [abcd, setAbcd] = React.useState('');
  const [piemers_1, setPiemers] = React.useState('');
  const [formError, setformError] = React.useState(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();

    if (!abcd || !piemers_1) {
      setformError('Aizpildiet lauciņus');
      return;
    }

    const { data, error } = await supabase.from('Noliktava').insert([
      {
        abcd,
        piemers_1,
      },
    ]);

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      setformError(null);
      setAbcd('');
      setPiemers('');
      e.target.reset();
      abcd.current.value = '';
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="abcd"
          id="abcd"
          className="form-input"
          value={abcd}
          onChange={(e) => setAbcd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Input"
          id="piemers_1"
          className="form-input"
          value={piemers_1}
          onChange={(e) => setPiemers(e.target.value)}
        />
        <button type="submit" className="form-submit-btn">
          pievienot
        </button>
        {formError && <p className="form-error">{formError}</p>}
      </form>
    </div>
  );
}
