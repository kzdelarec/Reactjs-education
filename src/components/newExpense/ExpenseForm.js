import "./ExpenseForm.css";
import { useState } from "react";
import Expense from "../../entity/Expense"

const ExpenseForm = (props) => {

  const [inputTitle, setTitle] = useState('');
  const [inputPrice, setPrice] = useState('');
  const [inputDate, setDate] = useState('');

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceChangedHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()

    const newExpense = new Expense(
        inputDate, inputTitle, inputPrice
    );

    setTitle("");
    setPrice("");
    setDate("");
    props.onSaveExpenseData(newExpense);
  };

  const onCancelHandler = () => {
    props.onCancel();
  }


  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={inputTitle} onChange={titleChangedHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' value={inputPrice} onChange={priceChangedHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' value={inputDate} onChange={dateChangedHandler}/>
      </div>
    </div>
    <div className='new-expense__actions'>
    <button type='cancel' onClick={onCancelHandler}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
