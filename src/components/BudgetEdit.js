import React from 'react';
import {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;


 function BudgetEdit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: ''
  })

  const handleChange = (e) => {
    setTransaction({...transaction, [e.target.id]: e.target.value})
  }

  useEffect(() => {
    axios.get(`${API}/transactions/${id}`)
    .then((res) => setTransaction(res.data))
    .catch(err => console.log(err))
  },[id])

  const updateEntry = () => {
    axios
      .put(`${API}/transactions/${id}`, transaction)
      .then (res => {
        setTransaction(res.data)
        navigate(`/transactions/${id}`)
      })
      .catch(err => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Item:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleChange}
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
          onChange={handleChange}
        />
         <br/>
        <label>From:</label>
        <input
          id="from"
          type="text"
          name="post"
          value={transaction.from}
          placeholder="From"
          onChange={handleChange}
        />
         <br/>
        <label>Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder='Amount'
          value={transaction.amount}
          onChange={handleChange}
        />
        <br/>
        <label>Category:</label>
        <select value={transaction.category} id='category' onChange={handleChange} >
        <option value='placeholder'>Select a Category</option>
          <option value='rent'>Rent</option>
          <option value='Income'>Income</option>
          <option value='transportation'>Transportation</option>
          <option value='food'>Food</option>
          <option value='utilities'>Utilities</option>
          <option value='subscriptions'>Subscriptions</option>
        </select>
        <br/>
        <input type="submit" />
      </form>
      <Link to={`/transactions/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  )
}

export default BudgetEdit