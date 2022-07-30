import React from 'react'
import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function BudgetShow() {
  const [transaction, setTransaction] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/transactions/${id}`)
      .then((res) => setTransaction(res.data))
      .catch(err => console.log(err))
  }, [id]);


  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${id}`)
      .then((res) => navigate('/transactions'))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <p> <span style={{fontWeight: 'Bold', fontSize: `20px`}}> Item: </span> <span style ={{fontSize:'20px'}}>{transaction.item_name}</span></p>
      <ul>
        <li> <span style={{fontWeight: 'bold'}}>Amount: $</span>{transaction.amount}</li>
        <li><span style={{fontWeight: 'bold'}}> Date:</span> {transaction.date}</li>
        <li><span style={{fontWeight: 'bold'}}> From:</span>{transaction.from}</li>
        <li><span style={{fontWeight: 'bold'}}>Category:</span> {transaction.category}</li>
      </ul>
      <section>
        <Link to={`/transactions`}>
          <button>Go Back</button>
        </Link>
      </section>
      <section>
        <Link to={`/transactions/${id}/edit`}>
        <button>Edit</button>
        </Link>
      </section>

      <section>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  )
}

export default BudgetShow