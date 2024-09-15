import { createSlice } from "@reduxjs/toolkit";
interface initialState {
    count : number
}
const initialState : initialState = {
    count : 0
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      Incrment: (state)  => {
         state.count++;
      },
      Decrment: (state)  => {
         state.count--;
      },
    },
  });
  
  export const { Incrment , Decrment } = CounterSlice.actions;
  
  export default CounterSlice.reducer;