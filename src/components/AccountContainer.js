import React,{ useEffect,useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [ transactions,  setTransactions] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  //console.log(transactions)


  function handleUpdatedOnSubmission(newTransaction){
    
    //setTransactions(transactions =>[...transactions,newTransaction ])

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
  

  return (
    <div>
      <Search onSearch={setSearch} search={search}/>
      <AddTransactionForm onSubmission={handleUpdatedOnSubmission} />
      <TransactionsList transactions={transactions} search={search}/>
    </div>
  );
} 

export default AccountContainer;
