const redux = require('redux');

const counterReducer = (state =  {counter: 0}, action) => {
   return { counter: state.counter + 1 };
};

const store = redux.createStore(counterReducer);

const subscriber = () => {
    console.log(store.getState());
};

store.subscribe(subscriber);

console.log(store.getState());

store.dispatch({type:'inc'});
store.dispatch({type:'inc'});
