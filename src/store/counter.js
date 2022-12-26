import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;  //Will be imported as counterReducer