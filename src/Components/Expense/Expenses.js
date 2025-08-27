import "./Expenses.css"

import ExpenseList from "./ExpenseList.js"
// import { useState } from "react"
import ExpenseChart from "./ExpenseChart.js"
import ExpenseFilter from "./ExpenseFilter.js"
import Card from "../UI/Card.js"

const Expenses = (props) => {
//    const  [filterYear, setFilterYear] = useState("2025")
   
// const filterChangeHandler = (filterYear) => {
//  setFilterYear(filterYear)
// } 


//  const filterExpense  = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filterYear
//  })



//  console.log("From Expenses.js line 32 checking overall total:", filterExpense)

    return<Card className = "expenses">
        <ExpenseFilter selected={props.selected} onChangeFilter = {props.filter} />
        <ExpenseChart expenses={props.items} />
        <ExpenseList items={props.items} totalAmount={props.totalAmount} />

    </Card>
}
export default Expenses