import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../common-UI/Card";

const ExpensesList = (props) => {
  const items = props.expenses.map((expense) => (
    <ExpenseItem expense={expense}></ExpenseItem>
  ));
  return <Card className="expenses-list">{items}</Card>;
};

export default ExpensesList;
