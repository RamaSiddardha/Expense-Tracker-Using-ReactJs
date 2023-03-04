import "./ExpenseForm.css";
import React from "react";

function NewExpenseForm(props) {
  let [EnteredTitle, SetTitle] = React.useState("");
  let [EnteredAmount, SetAmount] = React.useState("");
  let [EnteredDate, SetDate] = React.useState("");

  let TitleChangeEvent = (e) => {
    SetTitle(e.target.value);
  };

  let AmountChangeEvent = (e) => {
    SetAmount(e.target.value);
  };

  let DateChangeEvent = (e) => {
    SetDate(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    let EnteredValues = {
      item: EnteredTitle,
      price: EnteredAmount,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(EnteredValues);

    SetTitle("");
    SetAmount("");
    SetDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Expense Title</label>
          <input type="Text" value={EnteredTitle} onChange={TitleChangeEvent} />
        </div>
        <div className="new-expense__control ">
          <label>Expense Amount</label>
          <input
            type="number"
            value={EnteredAmount}
            onChange={AmountChangeEvent}
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input type="date" value={EnteredDate} onChange={DateChangeEvent} />
        </div>
        <div className="new-expense__actions">
          <button tyope="Submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default NewExpenseForm;
