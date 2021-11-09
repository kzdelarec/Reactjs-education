import "./NewExpense.css";
import Card from "../common-UI/Card.js";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
