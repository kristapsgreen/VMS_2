import React, { useState, useEffect } from 'react';
import './index.css';
import supabase from './supabaseClient.js';

export default function Review(props) {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [formError, setFormError] = useState(null);

  const [barcode, setBarcode] = useState('');
  const [modelis, setModelis] = useState('');
  const [precesKods, setPrecesKods] = useState('');
  const [menesis, setMenesis] = useState('');
  const [gads, setGads] = useState('');
  const [statuss, setStatus] = useState('');
  const [stiprums, setStiprums] = useState('');

  const [reviewed, setReviewed] = useState(false); // new state variable to track whether the form has been reviewed

  useEffect(() => {
    const fetchData = async () => {
      let query = supabase.from('prece').select('*').eq('precesNr', props.name);
      const { data, error } = await query;
      if (error) {
        setFetchError('Could not fetch data');
        setData(null);
        console.log(error);
      } else {
        setData(data[0]);
        setFetchError(null);
        setBarcode(data[0].svitrkods);
        setModelis(data[0].modelis);
        setPrecesKods(data[0].precesKods);
        setMenesis(data[0].derigumaTerminsMenesis);
        setGads(data[0].derigumaTerminsGads);
        setStatus(data[0].statuss);
        setStiprums(data[0].optiskaisStiprums);
      }
    };
    fetchData();
  }, [props.name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedData = {
      svitrkods: barcode,
      modelis: modelis,
      precesKods: precesKods,
      derigumaTerminsMenesis: menesis,
      derigumaTerminsGads: gads,
      statuss: statuss,
      optiskaisStiprums: stiprums,
    };
    const { error } = await supabase.from('prece').update(updatedData).eq('precesNr', props.name);
    if (error) {
      setFormError('Could not update data');
      console.log(error);
    } else {
      setFormError(null);
      props.onDeleteSuccess();
    }
  };

  const handleReview = () => {
    setReviewed(true); // set the "reviewed" state variable to true when the "Review" button is clicked
  };

  return (
    <div className="form-container">
      {!reviewed && <button onClick={handleReview}>Labot</button>}
      {reviewed && data && (
        <form onSubmit={handleSubmit}>
          <label>
            Svitrkods:
            <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} />
          </label>
          <label>
            Modelis:
            <input type="text" value={modelis} onChange={(e) => setModelis(e.target.value)} />
          </label>
          <label>
            Preces kods:
            <input type="text" value={precesKods} onChange={(e) => setPrecesKods(e.target.value)} />
          </label>
          <label>
            Derīguma termins mēnesīs:
            <input type="text" value={menesis} onChange={(e) => setMenesis(e.target.value)} />
          </label>
          <label>
            Derīguma termins gadā:
            <input type="text" value={gads} onChange={(e) => setGads(e.target.value)} />
          </label>
          <label>
            Statuss:
            <input type="text" value={statuss} onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label>
            Optiskais stiprums:
            <input type="text" value={stiprums} onChange={(e) => setStiprums(e.target.value)} />
          </label>
          <div className="form-buttons">
            <button type="submit" className="form-button">
              Saglabāt
            </button>
            {formError && <p>{formError}</p>}
          </div>
        </form>
      )}
      {reviewed && fetchError && <p>{fetchError}</p>}
    </div>
  );}