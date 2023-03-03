import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const AddExpenseHandler =(expense) =>{
    
    expenses.push(expense)
    App()

  }
  const expenses = [
    {
      item: "Books",
      price: 500,
      location: "Vani Books Store",
      date: new Date(2022, 10, 25)
    },
    {
      item: "Car",
      price: 2000000,
      location: "Thar Showroom(Hyderabad)",
      date: new Date(2022, 11, 11)
    },
    {
      item: "Bike",
      price: 280000,
      location: "Royal Enfield Showroom(Hyderabad)",
      date: new Date(2022, 10, 25)
    }
  ];
  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseHandler}/>
      <Expense expenses= {expenses}/>
    </div>
  );
}

export default App;
