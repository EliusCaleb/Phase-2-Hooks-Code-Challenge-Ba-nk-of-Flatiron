import React from "react";
import Transaction from "./Transaction";
// item represent single transaction in the array of fetch 
function TransactionsList({transactions}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        
        { 
            transactions.map(item =>{
              return <Transaction 
                        date={item.date}  
                         description={item.description} 
                         amount={item.amount} 
                        category={item.category} 
                        key={item.id}
                       />
            })
         
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
