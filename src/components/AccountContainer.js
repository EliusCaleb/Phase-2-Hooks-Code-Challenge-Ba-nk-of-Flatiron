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

    console.log(newTransaction);

  }
  return (
    <div>
      <Search />
      <AddTransactionForm onSubmission={handleUpdatedOnSubmission} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
