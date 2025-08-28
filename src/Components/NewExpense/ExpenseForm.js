import { useState } from "react";
import "./ExpenseForm.css";
import Error from "../UI/Error";

const ExpenseForm = (props) => {
    const [title, setTitle]= useState("")
    const [amount, setAmount]= useState("")
    const [date, setDate]= useState("")
    const [error, setError] = useState(null)
  

    const titleHandler = (e) => {
      if(e.target.value.trim().length === 0){
        
      }

        setTitle(e.target.value)
      
    }
    const amountHandler = (e) => {
        if(e.target.value.trim().length === 0){
      
      }
        setAmount(e.target.value)
     
         
    }
    const dateHandler = (e) => {
           if(e.target.value.trim().length === 0){
        
    
      }
        setDate(e.target.value)
     
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0){
           setError({title:"Empty Fields!", message:"All fields must contain a value"})
          return 
        }

        if(+amount < 1){
            setError({title:"Invalid amount!", message:"Amount must be greater than one."})
          return 
        }
        const expenseData = {
            title:title,
            amount:+amount,
            date: new Date(date),
        }

        console.log("From Expense Data", expenseData)
        props.onSaveExpense(expenseData)

        setTitle("");
        setAmount("");
        setDate("");

    }

    const errorHandler = () => {
      setError(null)
    }



  return (<>
     {error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title" className="label">Title </label>
          <input id="title" type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount" className="label">Amount  </label>
          <input
            id="amount"
            type="number"
            min="0.1"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date"className="label">Date </label>
          <input id="date" type="date" value={date} onChange={dateHandler} min="2025-01-01" max="2030-12-12" />
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  </>

 
  );
};

export default ExpenseForm;
