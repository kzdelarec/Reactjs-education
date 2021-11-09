import ExpensesList from "./components/expenses/ExpensesList";
import Expense from "./entity/Expense";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const expenses = [
    new Expense(new Date(), "Expense1", 110),
    new Expense(new Date(), "Expense2", 120),
    new Expense(new Date(), "Expense3", 130),
    new Expense(new Date(), "Expense4", 140),
    new Expense(new Date(), "Expense5", 150),
    new Expense(new Date(), "Expense6", 160),
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense></NewExpense>
      <ExpensesList expenses={expenses}></ExpensesList>
    </div>
  );
}

export default App;
