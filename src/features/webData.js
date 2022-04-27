import data from '../data'

import { createSlice } from "@reduxjs/toolkit";

let initialValue = { movies: data.movies, series: data.series }

export const infoSlice = createSlice({
   name: 'info',
   initialState: { value: initialValue },
   reducers: {

   }
})

export default infoSlice.reducer
