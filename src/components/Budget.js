import React from "react";
import { Link } from 'react-router-dom'

function Budget({transaction,id}) {
  return (
    <tr>
      <td>
        <p>{transaction.date}</p>
      </td>
      <td>
        <p> {transaction.item_name}</p>
      </td>
      <td>
        <p>$ {transaction.amount}</p>
      </td>
      <td>
        <p>{transaction.category}</p>
      </td>
      <td>
      <Link to={`/transactions/${id}`}> Details </Link>
      </td>
    </tr>

  );

}

export default Budget