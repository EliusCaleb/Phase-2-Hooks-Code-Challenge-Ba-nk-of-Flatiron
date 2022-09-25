import React,{useState} from "react";

function AddTransactionForm(onSubmission) {
  const [formData,setFormData] =  useState({
          date :'',
          description : '',
          category : '',
          amount : ' '


  })
 
 
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
     onSubmission(formData)
    }
     

    function handleChange(e){
      setFormData({...formData, [e.target.name]: e.target.value})
    }
   
     
    
 
  return (
    <div className="ui segment"  >
      <form className="ui form"  onChange={handleChange}  onSubmit={handleSubmit}    >
        <div className="inline fields">
          <input type="date" name="date" onChange={handleDate} value={form.date}/>
 
          <input type="text" name="description" placeholder="Description" onChange={handleDescription} value={form.description}    />
 
          <input type="text" name="category" placeholder="Category" onChange={handleCategory} value={form.category}/>
 
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleAmount} value={form.amount}/>
 
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
      
    </div>
  );
 
}
export default AddTransactionForm;
