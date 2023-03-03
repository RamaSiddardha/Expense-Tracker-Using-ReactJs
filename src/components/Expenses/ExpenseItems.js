import React from 'react'
import ExpenseDate from "./ExpenseDate";
import ExpenceDetails from "./ExpenseDetails";
import "./ExpenseItems.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
let [price,discount] = React.useState(props.price)
  let DiscountPrice = (e) =>{
    discount(100)
  }

  return (
    <Card> <div className="expense-item"> 
      <ExpenseDate Date={props.Date} />
        <ExpenceDetails
          item={props.item}
          location={props.location}
          price={price}
        />
        <button onClick = {DiscountPrice}>Discount</button>
        </div>
    </Card>
  );
}

export default ExpenseItem;
