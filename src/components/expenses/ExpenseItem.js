import "./ExpenseItem.css";
import DateItem from "../common-UI/DateItem";
import Card from "../common-UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [price, setPrice] = useState(props.expense.price);

  const clickHandler = () => {
    setPrice(price + 1);
  };

  return (
    <Card className="expense-item">
      <DateItem date={props.expense.date}></DateItem>
      <div className="expense-item__description">
        <h2>{props.expense.name}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      <button onClick={clickHandler}>Povecaj</button>
    </Card>
  );
};

export default ExpenseItem;
