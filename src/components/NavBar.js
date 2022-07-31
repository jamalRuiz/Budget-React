import { Link } from "react-router-dom";
import React from 'react'
export default function NavBar() {
  return (
    <nav className="nav">
       
      <h1 className="nav-head">
        <Link to="/transactions">Budget Me </Link>
      </h1>
      <button className="nav-btn">
        <Link to ="/">Home</Link>
      </button>
      <br></br>
      <button className="nav-btn">
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
