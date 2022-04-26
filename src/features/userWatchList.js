// import data from '../data'

import { createSlice } from "@reduxjs/toolkit";

let initialValue = []

export const watchListSlice = createSlice({
   name: 'watchList',
   initialState: { value: initialValue },
   reducers: {
      addItem: (state, action) => {
         const newData = action.payload
         state.value = [...state.value, newData]
      },
   }
})

export const { addItem } = watchListSlice.actions

export default watchListSlice.reducer
