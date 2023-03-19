import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';

export default function ViewPage() {
  const [fetchError, setFetchError] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Noliktava')
        .select();

      if (error) {
        setFetchError('Could not fetch data');
        setData(null);
        console.log(error);
      }

      if (data) {
        setData(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="view-page">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>time</th>
            <th>piemers_1</th>
            <th>abcd</th>
          </tr>
        </thead>
        <tbody>
          {fetchError && <tr><td colSpan="4" className="error">{fetchError}</td></tr>}
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.created_at}</td>
                <td>{item.piemers_1}</td>
                <td>{item.abcd}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
