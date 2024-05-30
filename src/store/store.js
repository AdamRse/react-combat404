import { configureStore } from "@reduxjs/toolkit";
import fightReducer from '../features/fight/fightSlice'

export const store = configureStore({
    reducer: {
        fight: fightReducer
    },
})
