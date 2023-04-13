import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user : JSON.parse(localStorage.getItem("user")) || {},

    isLoggedIn: JSON.parse(localStorage.getItem("user")) ? true : false

}

export  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const auth = action.payload;
            state.user = auth;
            state.isLoggedIn = true;
        },
        logOut: (state, action) => {
            localStorage.removeItem("user");
            state.user = {};
            state.isLoggedIn = false;
        }, 
        register: (state, action) => {
            const auth = action.payload;
            state.user = auth;
            state.isLoggedIn = true;
        }
    }
})

export const { login , logOut, registerl} = userSlice.actions;
export default userSlice.reducer;
