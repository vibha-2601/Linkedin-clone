import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
      // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Immer library,which detects changes to a "draft state" and produces a brand new immutable state based off those changes
      
      // Use the PayloadAction type to declare the contents of `action.payload`
      
       logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// selectors and they allow us to pull information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
    
    
   
