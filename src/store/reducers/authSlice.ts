import {IAuthState} from "../../types/Auth";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login} from "../actions/authActions";

const initialState: IAuthState = {
    auth: false,
    loading: false,
    error: ''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        })
        builder.addCase(login.pending, (state) => {
            state.loading= true;
        })
        builder.addCase(login.rejected, (state) => {
            state.error = 'Логин/пароль неверен';
        })
}})

export default authSlice.reducer