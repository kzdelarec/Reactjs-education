import "./ExpenseForm.css";
import { useState } from "react";
import Expense from "../../entity/Expense"

const ExpenseForm = () => {

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
        inputTitle, inputPrice, inputDate
    );

    console.log(newExpense);
  }


  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangedHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={priceChangedHandler}/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangedHandler}/>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
