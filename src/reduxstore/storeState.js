import { createSlice, configureStore } from '@reduxjs/toolkit';
import {createStore} from 'redux'; 

const initialCounterValue =  { counterState: 0, showCounter: true }; //2 states

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterValue,
    reducers: {
        increment(state){
            state.counterState++;
        },
        decrement(state){
            state.counterState--;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
        increase(state, action){
            state.counterState = state.counterState + action.payload;
        },
    },
});

//Login
const initialLoginState = { isLoggedIn: false };
const loginSlice = createSlice({
    name: "authentication",
    initialState: initialLoginState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});
const stateStore = configureStore({
    reducer: {
        counterData: counterSlice.reducer,
        auth: loginSlice.reducer,
    }
})

//header
// const stateStore = configureStore({reducer: counterSlice.reducer})

export const counterActions = counterSlice.actions
export const authActions = loginSlice.actions;
export default stateStore;

//METHOD OF REDUX STATE MANAGEMENT
/*const counterReducer = (state = 
    initialCounterValue, action) => {
        if ( action.type === "increment"){
            return {counterState: state.counterState + 1, showCounter: state.showCounter,}
        }
        if ( action.type === "decrement"){
            return {counterState: state.counterState - 1, showCounter: state.showCounter,}
        }
        if ( action.type === "increase"){
            return {counterState: state.counterState + 5, showCounter: state.showCounter,}
        }
        if (action.type === "toggle"){
            return {showCounter: !state.showCounter, counterState: state.counterState}
        }
        return state;
    };


const appStore = createStore(counterReducer);

export default appStore;*/