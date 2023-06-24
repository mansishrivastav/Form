import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-color" style={{ marginBottom: '5rem', color: 'white' }}>
      <div className="container-fluid">
        <Link className=" navbar-brand hover nav-link" to="/" style={{ color: 'white' }}>Form</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className=" navbar-brand nav-link active hover" aria-current="page" to="/saved" style={{ color: 'white' }}>User Information</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

