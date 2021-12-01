import { createStore } from 'redux';

const counterReducer = (state = {counter: 0, step: 1}, action) => {
    if(action.type === 'INC'){
        return {counter: state.counter + action.step};
    }
    if(action.type === 'DEC'){
        return {counter: state.counter - action.step};
    }
    return state;
};

const store = createStore(counterReducer);

export default store;
