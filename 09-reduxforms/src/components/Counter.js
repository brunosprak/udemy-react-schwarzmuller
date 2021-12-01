import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show);
  const dispatch = useDispatch();
  
  const incrementHandler  = (step = 1) => {
    dispatch({ type: 'INC', step: step});
  }

  const decrementHandler  = (step = 1)  => {
    dispatch({ type: 'DEC', step: step});
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler.bind(null, 1)}>Increment</button>
      <button onClick={incrementHandler.bind(null, 5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
