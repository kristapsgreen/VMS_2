import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';

export default function InputPage() {
  const [barcode, setBarcode] = React.useState('');
  const [komentars, setKomentars] = React.useState('');
  const [formError, setformError] = React.useState(null);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!komentars || !barcode) {
      setformError('Aizpildiet lauciņus');
      return;
    }
    const bararray = barcode.split(" ");
    const { data: { user } } = await supabase.auth.getUser()
    try {
      await Promise.all(bararray.map(async (item) => {
        let modelis = item.substr(0, 5);
        let optiskaisStiprums = item.substr(7, 3);
        let precesKods = item.substr(10, 10);
        let menesis = item.substr(20, 2);
        let gads = item.substr(22, 2);
        const { data, error } = await supabase.from('prece').insert([
          {
            svitrkods: item,
            modelis: modelis,
            optiskaisStiprums: optiskaisStiprums,
            precesKods: precesKods,
            derigumaTerminsGads: gads,
            derigumaTerminsMenesis: menesis,
            registretajaEpasts:user.email,
          }
        ]);
        if (error) {
          throw error;
        }
        return data;
      }));
      setformError(null);
      setBarcode('');
      setKomentars('');
      e.target.reset();
      alert('Dati pievienoti veiksmīgi!');
    } catch (error) {
      setError(error);
      setData(null);
    }
  }
  
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Svītrkodi"
    id="barcode"
    className="form-input"
    value={barcode}
    onChange={(e) => setBarcode(e.target.value)}
    />
    <input
    type="text"
    placeholder="komentārs"
    id="komentars"
    className="form-input"
    value={komentars}
    onChange={(e) => setKomentars(e.target.value)}
    />
    <button type="submit" className="form-submit-btn">
    pievienot
    </button>
    {formError && <p className="form-error">{formError}</p>}
    </form>
    </div>
    );
  }
  
  