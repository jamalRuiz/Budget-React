import { Link } from "react-router-dom";
import React from 'react'
export default function NavBar() {
  return (
    <nav>
        
      <h1>
        <Link to="/transactions">Budget Me </Link>
      </h1>
      <button>
        <Link to ="/">Home</Link>
      </button>
      <br></br>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
