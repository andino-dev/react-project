import React,{useState} from 'react';


 
 const AddTransaction = ()=>{
    
     const[text,setText] = useState('');
     const[amount,setAmount] = useState(0);
     console.log(useState(""));
     return(
         <div>
             <h3>Add New Transaction</h3>

             <form  onSubmit ={handleSubmit} >
                 <div className="form-control">
                     <label htmlFor="text">Text</label>
                     <input type="text" value={text}  onChange={(e)=>setText(e.target.value)}placeholder="Enter Text...."/>
                 </div>
                 <div className="form-control">
                     <label htmlFor="amount">Amount <br/>(negative-expense,positive-income</label>
                     <input type="number"  value={amount}  onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount...."/>
                 </div>
                 <button className="btn"> Add transaction</button>
                 
             </form>
         </div>
     )
 }  
  export default AddTransaction;