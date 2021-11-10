import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../common-UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const onFilterChangeHandler = (year) => {
    setFilterYear(year);
    console.log(year);
  };

  let filteredExpenses = props.expenses.filter(expense => new Date(expense.date).getFullYear() == filterYear);
  let filteredContent = <p>Nothing to show.</p>;
  if(filteredExpenses.length > 0) {
    filteredContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
    ));
  };

  return (
    <Card className="expenses-list">
      <ExpenseFilter
        onFilterChanged={onFilterChangeHandler}
        selected={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {filteredContent}
    </Card>
  );
};

export default ExpensesList;
