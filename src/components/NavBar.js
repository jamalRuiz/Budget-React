import { Link } from "react-router-dom";
import React from 'react'
export default function NavBar() {
  return (
    <nav>
        
      <h1>
        <Link to="/budget">Budget Me App</Link>
      </h1>
      <button>
        <Link to="/budget/new">New Transaction</Link>
      </button>
    </nav>
  );
}
