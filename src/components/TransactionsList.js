import React from "react";
import Transaction from "./Transaction";
// item represent single transaction in the array of fetch 
function TransactionsList({transactions,search}) {

  const filterSearch = transactions.filter((transaction)=>{return transaction.description.toLowerCase().includes(search.toLowerCase()) })
  
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
          filterSearch.map(item =>{
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
