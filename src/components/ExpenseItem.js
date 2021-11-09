import "./ExpenseItem.css";
import DateItem from "./DateItem";

const ExpenseItem = (props) => {
  const items = props.expenses.map((expense) => (
    <div className="expense-item">
      <DateItem date={expense.date}></DateItem>
      <div className="expense-item__description">
        <h2>{expense.name}</h2>
        <div className="expense-item__price">{expense.price + "kn"}</div>
      </div>
    </div>
  ));
  return items;
};

export default ExpenseItem;
