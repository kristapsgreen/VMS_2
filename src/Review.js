// import React, { useState, useEffect } from 'react';
// import './index.css';
// import supabase from './supabaseClient.js';

// export default function Review(props) {
//   const [data, setData] = useState(null);
//   const [fetchError, setFetchError] = useState(null);
//   const [formError, setFormError] = useState(null);

//   const [barcode, setBarcode] = useState('');
//   const [modelis, setModelis] = useState('');
//   const [precesKods, setPrecesKods] = useState('');
//   const [menesis, setMenesis] = useState('');
//   const [gads, setGads] = useState('');
//   const [status, setStatus] = useState('');
//   const [stiprums, setStiprums] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       let query = supabase.from('prece').select('*').eq('precesNr', props.name);
//       const { data, error } = await query;
//       if (error) {
//         setFetchError('Could not fetch data');
//         setData(null);
//         console.log(error);
//       } else {
//         setData(data[0]);
//         setFetchError(null);
//         setBarcode(data[0].svitrkods);
//         setModelis(data[0].modelis);
//         setPrecesKods(data[0].precesKods);
//         setMenesis(data[0].derigumaTerminsMenesis);
//         setGads(data[0].derigumaTerminsGads);
//         setStatus(data[0].statuss);
//         setStiprums(data[0].optiskaisStiprums);
//       }
//     };
//     fetchData();
//   }, [props.name]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let updatedData = {
//       svitrkods: barcode,
//       modelis: modelis,
//       precesKods: precesKods,
//       derigumaTerminsMenesis: menesis,
//       derigumaTerminsGads: gads,
//       statuss: status,
//       optiskaisStiprums: stiprums,
//     };
//     const { error } = await supabase.from('prece').update(updatedData).eq('precesNr', props.name);
//     if (error) {
//       setFormError('Could not update data');
//       console.log(error);
//     } else {
//       setFormError(null);
//     }
//   };

//   return (
//     <div className="form-container">
//       {data && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Svītrkodi"
//             id="barcode"
//             className="form-input"
//             value={barcode}
//             onChange={(e) => setBarcode(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Modelis"
//             id="modelis"
//             className="form-input"
//             value={modelis}
//             onChange={(e) => setModelis(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Preces kods"
//             id="preces-kods"
//             className="form-input"
//             value={precesKods}
//             onChange={(e) => setPrecesKods(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Mēnesis"
//             id="menesis"
//             className="form-input"
//             value={menesis}
//             onChange={(e) => setMenesis(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Gads"
//             id="gads"
//             className="form-input"
//             value={gads}
//             onChange={(e) => setGads(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Gads"
//             id="gads"
//             className="form-input"
//             value={gads}
//             onChange={(e) => setGads(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Stiprums"
//             id="stiprums"
//             className="form-input"
//             value={stiprums}
//             onChange={(e) => setStiprums(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Statuss"
//             id="statuss"
//             className="form-input"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           />

