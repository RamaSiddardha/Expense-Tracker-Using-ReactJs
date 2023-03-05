import ExpenseList from "./ExpenseList"
import React from "react";
import "./Expense.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter";

function Expense(props){

  const [enteredYear, setEnteredYear] = React.useState('2020');
    const onSaveExpanseYearHandler = expenseYear => {
        setEnteredYear(expenseYear);
    }

    const filteredExpense = props.expenses.filter((expense) =>{
      return expense.date.getFullYear().toString() === enteredYear
    })

    return <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onSaveExpanseYear={onSaveExpanseYearHandler} />
     <ExpenseList items={filteredExpense}/>
    </Card>
}

export default Expense