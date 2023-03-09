import React from 'react';
import ReactDOM from'react-dom';
import './index.css';
import supabase from './supabaseClient.js';

export default function InputPage() {
    const [abcd,setAbcd] = React.useState('')
    const [piemers_1,setPiemers] = React.useState('')
    const [formError, setformError] = React.useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // nomaini
        if(!abcd || !piemers_1){
            setformError("Aizpildiet lauciņus");
            return
        }
        // console.log(barcode);
        const { data,   error } = await supabase
            .from('Noliktava')
            .insert([{abcd , piemers_1}])

        if(error){
            console.log(error);
        }
        if (data){
            console.log(data);
            setformError(null);
        }
                

    }
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"
             placeholder='abcd' 
             id="abcd"
            //  nomaini
             value={abcd}
             onChange={(e) => setAbcd(e.target.value)}/>
            <input type="text"
             placeholder='piemers_1'
             id="piemers_1" 
            //  nomaini
             value={piemers_1}
             onChange={(e) => setPiemers(e.target.value)}/>
            
            <button type="submit">pievienot</button>
            {formError && <p>{formError}</p>}
            </form>
        </div>
       
    );
};