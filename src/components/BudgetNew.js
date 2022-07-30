import React from 'react';
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

function BudgetNew() {
  const navigate = useNavigate();

  const addEntry = () => {
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => navigate('/transactions'))
      .catch(err => console.log(err))
  }

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry()
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label>Item:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br/>
        <label>Date:</label>
        <input
          id="date"
          type="text"
          required
          value={transaction.date}
          placeholder="Date"
          onChange={handleTextChange}
        />
         <br/>
        <label>From:</label>
        <input
          id="from"
          type="text"
          name="post"
          value={transaction.from}
          placeholder="From"
          onChange={handleTextChange}
        />
         <br/>
        <label>Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder='Amount'
          value={transaction.amount}
          onChange={handleTextChange}
        />
        <br />
        <label>Category:</label>
        <select value={transaction.category} id='category' onChange={handleTextChange} >
          <option value='housing'>Housing</option>
          <option value='Income'>Income</option>
          <option value='transportation'>Transportation</option>
          <option value='food'>Food</option>
          <option value='utilities'>Utilities</option>
          <option value='entertainment'>Entertainment</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}


export default BudgetNew