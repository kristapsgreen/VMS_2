import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.css";
import supabase from './supabaseClient.js';

export default function Layout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }

    getUser();
  }, []);

  return (
    <div className="layout-container">
      <nav className="navigation">
        {user ? (
          <ul className="nav-links">
            <li>
              <Link to="/ViewPage" className="nav-link">
                View database
              </Link>
            </li>
            <li>
              <Link to="/InputPage" className="nav-link">
                Ievadīt datus
              </Link>
            </li>
            <li>
              <Link to="/NewUser" className="nav-link">
                Reģistrēties
              </Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link">
                Ielogoties/izlogoties
              </Link>
            </li>
            <li>
              <Link to="/passwordChange" className="nav-link">
                Nomainīt Paroli 
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav-links">
            <li>
              <Link to="/NewUser" className="nav-link">
                Reģistrēties
              </Link>
            </li>
            <li>
              <Link to="/Login" className="nav-link">
                Ielogoties/izlogoties
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <Outlet />
    </div>
  );
};
