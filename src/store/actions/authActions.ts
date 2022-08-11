import {Dispatch} from "react";
import axios from "axios";
import {
    AuthActions,
    FETCH_USER,
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS,
    IAuthState,
    IFetchUser,
    IFetchUserError,
    IFetchUserSuccess
} from "../../types/Auth";

const _URL: string = 'http://localhost:3001/user';

const fetchUser = (payload: boolean): IFetchUser => ({
    type: FETCH_USER,
    payload
});

const fetchUserSuccess = (payload: boolean): IFetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload
});

const fetchUserError = (payload: boolean): IFetchUserError => ({
    type: FETCH_USER_ERROR,
    payload
})

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActions>) => {
        dispatch(fetchUser(true));

        await axios.get(`${_URL}?email=${email}`)
            .then(r => {
                if (r.status === 200) {
                    if (r.data.password === password) {
                        localStorage.setItem('authenticate', 'true');
                        dispatch(fetchUserSuccess(true))
                        window.location.reload();
                    } else dispatch(fetchUserError(true))
                }
            })
            .catch(e => dispatch(fetchUserError(true)))
    }
}