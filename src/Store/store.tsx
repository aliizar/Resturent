import { configureStore } from "@reduxjs/toolkit";
import GalleryData from "../Reducers/GalleryData"; // Assuming GalleryData is the slice for handling gallery
import CounterSlice from "../Reducers/CounerSlice"; // Assuming GalleryData is the slice for handling gallery

const store = configureStore({
  reducer: {
    gallery: GalleryData, 
    counter : CounterSlice
  },
});

export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
