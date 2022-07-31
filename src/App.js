import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
// PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
// COMPONENTS
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
