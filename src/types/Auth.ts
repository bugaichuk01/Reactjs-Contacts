export interface IAuthState {
    auth: boolean,
    loading: boolean,
    error: boolean
}

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export interface IFetchUser {
    type: typeof FETCH_USER;
    payload: boolean
}

export interface IFetchUserSuccess {
    type: typeof FETCH_USER_SUCCESS;
    payload: boolean;
}

export interface IFetchUserError {
    type: typeof FETCH_USER_ERROR;
    payload: boolean
}

export type AuthActions = IFetchUser | IFetchUserSuccess | IFetchUserError