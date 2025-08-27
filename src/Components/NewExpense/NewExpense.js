import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    
    const startEditing = () => {
        setIsEditing(true)
    }
    
    const stopEditing = () => {
        setIsEditing(false)
    }
     const onSaveExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
                 
        }
        console.log("From New Expense:", expenseData)
        props.onAddExpense(expenseData)

        setIsEditing(false)
        
     }
    
    return<div className="new-expense" >
        {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
        {isEditing &&  <ExpenseForm onSaveExpense={onSaveExpenseHandler}  onCancel={stopEditing}/> }
       
    </div>
    
    }
export default NewExpense