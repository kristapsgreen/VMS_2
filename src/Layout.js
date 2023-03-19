import { Outlet, Link, useLocation } from "react-router-dom";
import React from "react";
import "./index.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <nav className="navigation">
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
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
