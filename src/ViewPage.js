import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';
import Delete from './Delete.js';

export default function ViewPage() {
  const [fetchError, setFetchError] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [numurs, setNumurs] = React.useState(null);
  const [registreja, setRegistreja] = React.useState(null);

  const fetchData = async () => {
    let query = supabase.from('prece').select();
    if (numurs) {
      query = query.filter('precesKods', 'ilike', `%${numurs}%`);
    } else if (registreja) {
      query = query.filter('registretajaEpasts', 'ilike', `%${registreja}%`);
    }
    const { data, error } = await query;

    if (error) {
      setFetchError('Could not fetch data');
      setData(null);
      console.log(error);
    } else {
      setData(data);
      setFetchError(null);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [numurs, registreja]);

  return (
    <div className="view-page">
      <div className="view-parameters">
        <input
          type="text"
          placeholder="Preces numurs"
          className="form-input"
          value={numurs}
          onChange={(e) => setNumurs(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reģistrētāja Epasts"
          className="form-input"
          value={registreja}
          onChange={(e) => setRegistreja(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Preces Nr</th>
            <th>Modelis</th>
            <th>Optiskais Stiprums</th>
            <th>Preces kods</th>
            <th>Derīguma Termiņš</th>
            <th>Reģistrēja</th>
            <th>Darbības</th>
          </tr>
        </thead>
        <tbody>
          {fetchError && <tr><td colSpan="7" className="error">{fetchError}</td></tr>}
          {data &&
            data.map((item) => (
              <tr key={item.precesNr}>
                <td>{item.precesNr}</td>
                <td>{item.modelis}</td>
                <td>{item.optiskaisStiprums}</td>
                <td>{item.precesKods}</td>
                <td>{item.derigumaTerminsMenesis}/{item.derigumaTerminsGads}</td>
                <td>{item.registretajaEpasts}</td>
                <td>
                  <Delete key={item.precesNr} name={item.precesNr} onDeleteSuccess={fetchData} /> 
                  {/* <Review key={item.precesNr} name={item.precesNr} onDeleteSuccess={fetchData}/> */}
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
