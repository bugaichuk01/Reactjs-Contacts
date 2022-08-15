import axios from "axios";
import {AppDispatch} from "../store";
import {authSlice} from "../reducers/authSlice";

const _URL: string = 'http://localhost:3001/user';

export const login = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.fetchUser());

        await axios.get(`${_URL}?email=${email}`)
            .then(r => {
                if (r.status === 200) {
                    if (r.data.password === password) {
                        localStorage.setItem('authenticate', 'true');
                        dispatch(authSlice.actions.fetchUserSuccess(true))
                        window.location.reload();
                    } else dispatch(authSlice.actions.fetchUserError('Error'))
                }
            })
            .catch(() => dispatch(authSlice.actions.fetchUserError("Error")))
    }
}