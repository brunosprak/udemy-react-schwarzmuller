import React, { useState } from 'react'; 

import ExpensesChart from "../Chart/ExpensesChart";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredExpenses = props.items.filter((expense) => {
    if(!filteredYear){
        return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  const filterSelectedHandler = selectedYear => {
      setFilteredYear(selectedYear);
  }


  return (
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterSelectedHandler}/>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses}/>  
        </Card>
    </div>
  );
}

export default Expenses;
