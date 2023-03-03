function ExpenceDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.item}</h2>
      {props.location}
      <div className="expense-item__price">Rs{props.price} </div>
    </div>
  );
}

export default ExpenceDetails;
