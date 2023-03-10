import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";
import './index.css';



export default function Layout() {

    return (
      <div>
          <nav>
          <ul>
            <li>
              <Link to="/ViewPage">View database</Link>
            </li>
            <li>
              <Link to="/InputPage">Input data</Link>
            </li>
            <li>
              <Link to="/NewUser">Pierakstīties</Link>
            </li>
               <li>
                {console.log("isnt logged in")}
              <Link to="/Login">Login/Logout</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
              {console.log("is this working")}
        </div>

    
    )
    
};
