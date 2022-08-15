import {IAuthState} from "../../types/Auth";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IAuthState = {
    auth: false,
    loading: false,
    error: ''
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fetchUser(state) {
            state.loading = true
        },
        fetchUserSuccess(state, action: PayloadAction<boolean>) {
            state.auth = action.payload
        },
        fetchUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

export default authSlice.reducer