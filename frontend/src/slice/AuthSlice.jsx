import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading: false,
    error: null,
    token: null,
}


const AuthSlice = createSlice({
    name: 'auth_slice',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null
            state.error = null
            state.loading = false
        },

        login(state) {
            state.token = "token"
            state.error = null
            state.loading = false
        }
    }
})


export default AuthSlice.reducer;
export const {login, logout} = AuthSlice.actions
