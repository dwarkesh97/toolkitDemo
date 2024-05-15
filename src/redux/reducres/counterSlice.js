import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { setIncrement, setDecrement } from '../actions'

const initialState = {
    value: 0,
}

const incrementAndDecrement = createReducer(
    initialState,
    builder => {
        builder
            .addCase(setIncrement, (state, action) => {
                state.value += action.payload
            })
            .addCase(setDecrement, (state, action) => {
                state.value -= action.payload
            })
    },
)

const rootReducer = combineReducers({
    data: incrementAndDecrement,
})

export default rootReducer