import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../config/redux";

// Define a type for the slice state
export interface CounterState {
  uid: string;
  userData: {} | null;
  loading: boolean;
  error:boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  uid: "",
  userData:null,
  loading:true,
  error:false
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logIn: (state) => {
      state.value += 1;
    },
    checkAuth: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logOut: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { logIn, logOut, checkAuth } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
