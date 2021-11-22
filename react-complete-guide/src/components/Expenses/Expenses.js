import React, { useState } from 'react'; 

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState('2021');
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterSelectedHandler = selectedYear => {

      console.log(!selectedYear);

      setFilteredYear(selectedYear);

      if(!selectedYear){
        setFilteredExpenses(props.items);
        return ;
      }
      
      setFilteredExpenses(props.items.filter( (expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
      }));
  }


  return (
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterSelectedHandler}/>
          <ExpensesList items={filteredExpenses}/>  
        </Card>
    </div>
  );
}

export default Expenses;
