import React from 'react'
import ExpenseDate from "./ExpenseDate";
import ExpenceDetails from "./ExpenseDetails";
import "./ExpenseItems.css";
import Card from "../UI/Card";

function ExpenseItem(props) {

  return (
    <Card> <div className="expense-item"> 
      <ExpenseDate Date={props.Date} />
        <ExpenceDetails
          item={props.item}
          price={props.price}
        />
        </div>
    </Card>
  );
}

export default ExpenseItem;
