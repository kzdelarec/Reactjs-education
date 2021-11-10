import "./NewExpense.css";
import Card from "../common-UI/Card.js";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState("false");

  const saveExpenseDataHandler = (entredExpneseData) => {
    props.onSavedNewExpense(entredExpneseData);
    setShowForm(false)
  };

  const hideForm = () => {
    setShowForm(true);
  }

  const onClickHandler = () => {
    hideForm();
  };

  const onCancelHandler = () => {
    hideForm();
  }

  let displayContent = (
    <div>
      <button type="button" onClick={onClickHandler}>Add New Expense</button>
    </div>
  );

  if (showForm == true) {
    displayContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>;
  }

  return <Card className="new-expense">{displayContent}</Card>;
};

export default NewExpense;
