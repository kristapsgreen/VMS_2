import React from 'react';
import './index.css';
import supabase from './supabaseClient.js';



export default function ViewPage() {
    const [fetchError, setFetchError] = React.useState(null);
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const {data, error}= await supabase
            .from('Noliktava')
            .select()
    if (error) {
        setFetchError('Could not fetch data');
        setData(null);
        console.log(error);
    }
    if (data) {
        setData(data);
        setFetchError(null);
    }}

    fetchData();
},[])
    return (
        <div>
            <table>
            <tr>
                <th>id</th>
                <th>time</th>
                <th>piemers_1</th>
                <th>abcd</th>
            </tr>
            </table>
            {fetchError && <p>{fetchError}</p>}
            {data && (
            <div>
                {fetchError && (<p>{fetchError}</p>)}
                {data && (<>
                    {data.map(item => (
                        <table>
                        <th>{item.id} </th>
                        <th>{item.created_at} </th>
                        <th>{item.piemers_1} </th>
                        <th>{item.abcd} </th>
                        </table>
                    ))}
                </>)}



            </div>
                )}
        </div>
    )
};