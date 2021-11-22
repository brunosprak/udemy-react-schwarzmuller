import React, { useState } from 'react'; 

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {

  const expenses = props.items;

  const [filteredYear, setFilteredYear] = useState('2021');

  function filterSelectedHandler(selectedYear){
      setFilteredYear(selectedYear);
  }

  return (
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onFilterSelected={filterSelectedHandler}/>
          <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
          ></ExpenseItem>
        </Card>
    </div>
  );
}

export default Expenses;
