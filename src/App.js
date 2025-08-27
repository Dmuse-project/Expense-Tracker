import "./App.css";

import { Fragment } from "react/jsx-runtime";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 1200,
    date: new Date(2025, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 300000, date: new Date(2025, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 50000,
    date: new Date(2025, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2025, 5, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_DATA);

  const [filterYear, setFilterYear] = useState("2025");

  const filterHandler = (filteredYear) => {
    setFilterYear(filteredYear);
  };
  const filteredExpense = expense.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  const overallTotal = filteredExpense.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  const addExpense = (newExpense) => {
    setExpense((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <Fragment>
      <h2 className="expense-title">Expense Tracker App</h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses
        items={filteredExpense}
        totalAmount={overallTotal}
        filter={filterHandler}
        selected={filterYear}
      />
    </Fragment>
  );
}

export default App;
