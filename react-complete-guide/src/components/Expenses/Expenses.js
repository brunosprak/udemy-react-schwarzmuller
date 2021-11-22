import React, { useState } from 'react'; 

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {

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

  let content = <p>No expenses found</p>;

  if(filteredExpenses.length > 0){
      content = filteredExpenses.map( expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}>
        </ExpenseItem>
      ));
  }

  return (
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterSelectedHandler}/>
          {content}          
        </Card>
    </div>
  );
}

export default Expenses;
