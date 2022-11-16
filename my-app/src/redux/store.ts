import { configureStore } from "@reduxjs/toolkit";
import  productsReducers from './productsSlice';

const store = configureStore({
    reducer: {
        products: productsReducers,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;