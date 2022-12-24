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

const initialCounterState = {
    value: 0,
    showCounter: true,
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        inc(state) {
            state.value++;
        },
        dec(state) {
            state.value--;
        },
        incBy(state, action) {
            state.value = state.value + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {isLogin: false};

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {state.isLogin = true},
        logout(state) {state.isLogin = false}
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;