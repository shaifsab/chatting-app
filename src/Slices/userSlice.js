import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'counter',
  initialState: {
    userData: JSON.parse(localStorage.getItem('userData')) ?  JSON.parse(localStorage.getItem('userData')):null,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const {incrementByAmount } = UserSlice.actions

export default UserSlice.reducer