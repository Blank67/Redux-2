// import { createStore } from 'redux';

// const initialState = {
//     counter: 0,
//     showCounter: true
// }

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'inc') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'dec') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     else if (action.type === 'incBy') {
//         return {
//             counter: state.counter + action.by,
//             showCounter: state.showCounter
//         }
//     }
//     else if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     else {
//         return state;
//     }
// };

// const store = createStore(counterReducer);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        inc(state) {
            state.counter++;
        },
        dec(state) {
            state.counter--;
        },
        incBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;