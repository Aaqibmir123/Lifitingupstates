import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const[title,newtitle]=useState('');
  const [amount,newamount]=useState('');
  const [date,newdate]=useState('');
  const titleChanger=(e)=>{
    newtitle(e.target.value);
  }

  const amountchanger=(e)=>{
newamount(e.target.value);
  }

  const dates=(e)=>{
    newdate(e.target.value)
  }

  const submitHandler=(event)=>{
    event.preventDefault();

    const details={
      tile:title,
      amount:amount,
      date:new Date(date)
    }
   //send data to the newexpenses 
   props.ongetdata(details);
    newtitle('');
    newamount('');
    newdate('');
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChanger}  value={title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountchanger}  value={amount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dates} value={date} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;