import {createStore} from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'dec') {
        return {
            counter: state.counter - 1
        }
    }
    else {
        return state;
    }
};

const store = createStore(counterReducer);

export default store;