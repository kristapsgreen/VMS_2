import React from 'react';
import ReactDOM from'react-dom';
import './index.css';
import { supabase } from './supabaseClient'

// export default function Auth() {
//     const [loading, setLoading] = React.useState(false)
//     const [email, setEmail] = React.useState('')

//     const handleLogin = async (e) => {
//         e.preventDefault()
    
//         try {
//           setLoading(true)
//           const { data, error } = await supabase.auth.signInWithPassword({
//             email: 'example@email.com',
//             password: 'example-password',
//           })
//           if (error) throw error
//           alert('Check your email for the login link!')
//         } catch (error) {
//           alert(error.error_description || error.message)
//         } finally {
//           setLoading(false)
//         }
//       }

//       return(
//         <div>
//             <h1>Ielogoties</h1>
//             {loading ? (
//           'Nosūta datus'
//         ) : (
//           <form onSubmit={handleLogin}>
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={data.email}
//             />
//              <input
//               id="email"
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={data.password}
//             />
//             <button className="button block" aria-live="polite">
//               Send magic link
//             </button>
//           </form>
//         )}
//         </div>
//       )
//     }

export default function Login() {
    return (
        <div>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
        </div>
    );
};