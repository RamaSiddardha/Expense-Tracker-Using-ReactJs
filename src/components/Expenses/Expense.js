import ExpenseItem from "./ExpenseItems"
import React from "react";
import "./Expense.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter";

function Expense(props){

  const [enteredYear, setEnteredYear] = React.useState('2020');
    const onSaveExpanseYearHandler = expenseYear => {
        setEnteredYear(expenseYear);
        console.log(expenseYear)
    }

    return <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onSaveExpanseYear={onSaveExpanseYearHandler} />
        {props.expenses.map((expense) => (
        <ExpenseItem
          item={expense.item}
          price={expense.price}
          Date={expense.date}
        />
      ))}
    </Card>
}

export default Expense