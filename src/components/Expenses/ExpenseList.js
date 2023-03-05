import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItems"

let ExpenseList = props => {

   if(props.items.length>0){
    return <ul className="expenses-list">{props.items.map((expense) => (
        <ExpenseItem
          item={expense.item}
          price={expense.price}
          Date={expense.date}
        />
      ))}
      </ul> 
    }

    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
}

export default ExpenseList