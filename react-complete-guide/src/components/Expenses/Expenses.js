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
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterSelectedHandler}/>
          {props.items.map( expense => (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}>
              </ExpenseItem>
            ))
          }          
        </Card>
    </div>
  );
}

export default Expenses;
