import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Budget from "./Budget.js";
const API = process.env.REACT_APP_API_URL;

function Budgets() {

    const [transactions, setTransactions] = useState([]);
  
    useEffect(() => {
      axios
        .get(`${API}/transactions`)
        .then((res) => setTransactions(res.data))
        .catch((err) => console.log(err))
    }, [])
  
let amount = transactions.reduce((total, transaction) =>
      total + Number(transaction.amount), 0)
      
  
  return (
      <div className="transactions-feed">
        <section>
          <h1>Bank Account Total: $ {amount}</h1>
          <table>
          <thead>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Category</th>
          </thead>
          <tbody>
          {transactions.map((transaction, id) => {
            return <Budget key={id} transaction={transaction} id={id} />
          })}
          </tbody>
          </table>
        </section>
      </div>
  
  )
}

export default Budgets