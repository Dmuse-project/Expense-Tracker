import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle]= useState("")
    const [amount, setAmount]= useState("")
    const [date, setDate]= useState("")

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0){
            return <h1>Empty Input. All Input must be filed.</h1>
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



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
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
          <label htmlFor="date">Date</label>
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
  );
};

export default ExpenseForm;
