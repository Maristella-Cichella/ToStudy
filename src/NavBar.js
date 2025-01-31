import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
import './Function.css';

function NavBar() {
  return (
    <nav>
      <div className="navbar-brand">
        <NavLink to="/">
          <img src="/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/appunti" activeClassName="active">
              Appunti
            </NavLink>
          </li>
          <li>
            <NavLink to="/gruppi" activeClassName="active">
              Gruppo
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendario" activeClassName="active">
              Calendario
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" activeClassName="active">
              Faq
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-user">
        <ul>
          <li>
            <NavLink to="/login" activeClassName="active">
              User
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
