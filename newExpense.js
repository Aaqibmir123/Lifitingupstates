import React from 'react';

import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {

  const saveData=(getdata)=>{

    const expensedata={
      ...getdata,
      id:Math.random().toString()
    };

   props.ondata(expensedata);

  }
  return (
    <div className='new-expense'>
      <ExpenseForm  ongetdata={saveData} />
    </div>
  );
};

export default NewExpense;