import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';

export default function Delete(props) {
  const handleDelete = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('prece')
      .delete()
      .eq('precesNr', props.name);

    if (error) {
      alert('Error deleting');

     }
      else {
      props.onDeleteSuccess(); 
    }
  };

  return (
    <div className="delete-container">
      <button className="delete-button" onClick={handleDelete}>
        Izdzēst
      </button>
    </div>
  );
}