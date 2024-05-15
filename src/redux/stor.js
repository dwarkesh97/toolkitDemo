import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducres/counterSlice'

export const store = configureStore({
    reducer: rootReducer
})