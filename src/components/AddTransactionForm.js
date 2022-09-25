import React,{useState} from "react";

function AddTransactionForm(onSubmiting) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
 
 
  function handleDate(e){
    setDate(e.target.value);
  }
 
  function handleDescription(e){
    setDescription(e.target.value);
  }
 
  function handleCategory(e){
    setCategory(e.target.value);
  }
 
  function handleAmount(e){
    setAmount(e.target.value);
  }
 
  function handleSubmit(event) {
      event.preventDefault();
       const formData = {
       date:date,
       description: description,
       category: category,
       amount: amount,
      };
     onSubmiting(formData)
    }

   
     
    
 
  return (
    <div className="ui segment"  onSubmit={handleSubmit}>
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDate} value={date}/>
 
          <input type="text" name="description" placeholder="Description" onChange={handleDescription} value={description}    />
 
          <input type="text" name="category" placeholder="Category" onChange={handleCategory} value={category}/>
 
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAmount} value={amount}/>
 
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
      
    </div>
  );
 
}
export default AddTransactionForm;
