import React,{ useEffect,useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [ transactions,  setTransactions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  console.log(transactions)


  function handleUpdatedOnSubmission(newTransaction){
    
    setTransactions(transactions =>[...transactions,newTransaction ])


    const configurationData =  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    }
    fetch("http://localhost:8001/transactions",configurationData)
     .then((response)=>response.json())
       .then(newItem=>setTransactions(transactions=>[...transactions,newItem]))
       .catch((error)=>{console.log(error)})
  }
  
  function handleSearch(search){
    console.log(search)
    const filterSearch = transactions.filter((transaction)=>{return transaction.description.toLowerCase().includes(search.toLowerCase()) })
    setTransactions(filterSearch)
    console.log(transactions)
}
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <AddTransactionForm onSubmission={handleUpdatedOnSubmission} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
