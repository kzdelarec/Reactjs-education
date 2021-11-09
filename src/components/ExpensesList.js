import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  return (
    <div className="expenses-list">
      <ExpenseItem expenses={props.expenses}></ExpenseItem>
    </div>
  );
};

export default ExpensesList;
