import React from 'react';
import ReactDOM from'react-dom';
import './index.css';
import supabase from './supabaseClient.js';

export default function InputPage() {
    //izveidoju hookus priekš katras lauciņa vērtības un priekš kļūdas
    const [abcd,setAbcd] = React.useState('')
    const [piemers_1,setPiemers] = React.useState('')
    const [formError, setformError] = React.useState(null)

    const handleSubmit = async (e) =>{
        //EPREVENT DEFAULT neļauj mājaslapai atjaunoties, bet tad arī lodziņos ievadītais teksts nepazudīs, kas nav pārāk parocīgi 
        // e.preventDefault();
        // nomaini
        if(!abcd || !piemers_1){
            setformError("Aizpildiet lauciņus");
            return
        }
        // console.log(barcode);
        const { data,   error } = await supabase
            .from('Noliktava')
            .insert([{abcd , piemers_1}])
        //ja ir kļūda no supabase, izvadi to 
        if(error){
            console.log(error);
        }
        // ja ir dati, izvadi tos un pēc tam lauciņu vērtību pārvērt par tukšumu
        if (data){
            console.log(data);
            setformError(null);
            setAbcd('');
            setPiemers('');
            e.target.reset();
            abcd.current.value="";
               
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
             placeholder='Input'
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