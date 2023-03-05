import React from "react";
import NewExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [isEditing,setIsEditing] = React.useState(false)

  let inputHandeler =(ExpenceData) =>{
    let InputData ={
      ...ExpenceData
    }
    props.onAddExpense(InputData)
    setIsEditing(false)
  }

  let StartEditingHandler = () => {
      setIsEditing(true)
  }

  let CancelEditingHandler = () => {
      setIsEditing(false)
  }


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={StartEditingHandler}>Add New Expense</button>}
    {isEditing && <NewExpenseForm onSaveExpenseData={inputHandeler} onCancel={CancelEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
