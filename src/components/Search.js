import React from "react";

function Search({onSearch,search}) {
 
 return (
   <div className="ui large fluid icon input">
     <input 
      onChange={(e)=>onSearch(e.target.value)}
      value= {search} 
       type="text"
       placeholder="Search your Recent Transactions"
        
     />
     <i  className="circular search link icon"></i>
   </div>
 );
}
 
export default Search;
