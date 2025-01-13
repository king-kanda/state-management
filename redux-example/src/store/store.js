import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counter'
import cartReducer from '../components/cart'

export const store = configureStore({
  reducer: {
    counter: counterReducer ,
    cart : cartReducer
  },
})