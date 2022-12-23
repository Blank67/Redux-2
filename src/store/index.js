import { createStore } from 'redux';

const initialState = {
    counter: 0,
    showCounter: true
}

const counterReducer = (state = initialState, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter + action.by,
            showCounter: state.showCounter
        }
    } else if (action.type === 'dec') {
        return {
            counter: state.counter - action.by,
            showCounter: state.showCounter
        }
    }
    else if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    else {
        return state;
    }
};

const store = createStore(counterReducer);

export default store;