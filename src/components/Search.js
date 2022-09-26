import React,{ useState } from "react";

function Search({onSearch}) {
  const [search,setSearch] = useState(" ")
  function handleChange(event){
   setSearch(event.target.value)
    onSearch(search)
  }
 return (
   <div className="ui large fluid icon input">
     <input 
      onChange={handleChange} 
       type="text"
       placeholder="Search your Recent Transactions"
        
     />
     <i onClick={handleChange} className="circular search link icon"></i>
   </div>
 );
}
export default Search;
