import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const DummyExpenses = [
  {
    item: "Books",
    price: 500,
    date: new Date(2022, 10, 25)
  },
  {
    item: "Car",
    price: 2000000,
    date: new Date(2022, 11, 11)
  },
  {
    item: "Bike",
    price: 280000,
    date: new Date(2022, 10, 25)
  }
];

function App() {

  const [expenses,SetExpenses]=React.useState(DummyExpenses)

  const AddExpenseHandler =(expense) =>{
    
    SetExpenses((prev_Expenses) => [expense,...prev_Expenses])

  }

  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseHandler}/>
      <Expense expenses= {expenses}/>
    </div>
  );
}

export default App;
