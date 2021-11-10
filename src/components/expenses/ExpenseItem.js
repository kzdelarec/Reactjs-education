import "./ExpenseItem.css";
import DateItem from "../common-UI/DateItem";
import Card from "../common-UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <DateItem date={new Date(props.expense.date)}></DateItem>
      <div className="expense-item__description">
        <h2>{props.expense.name}</h2>
        <div className="expense-item__price">{props.expense.price + "kn"}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
