import React from 'react';
import './index.css';
// import supabase from './config/supabaseClient.js';



export default function ViewPage() {
//     const [fetchError, setFetchError] = React.useState(null);
//     const [data, setData] = React.useState(null);

//     React.useEffect(() => {
//         const fetchData = async () => {
//             const {data, error}= await supabase
//             .from('Noliktava')
//             .select()
//     if (error) {
//         setFetchError('Could not fetch data');
//         setData(null);
//         console.log(error);
//     }
//     if (data) {
//         setData(data);
//         setFetchError(null);
//     }}

//     fetchData();
// },[])
    return (
        <div>
            {/* {fetchError && <p>{fetchError}</p>}
            {data && (
                <div>
                 {data.map((item) => (
                    <p>{item.piemers_1}</p>
                 ))}
    
                </div>
            )} */}
            <h1>Noliktava</h1>
        </div>
    );
};