import NewExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  let inputHandeler =(ExpenceData) =>{
    let InputData ={
      ...ExpenceData
    }

    props.onAddExpense(InputData)
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={inputHandeler}/>
    </div>
  );
}

export default NewExpense;
