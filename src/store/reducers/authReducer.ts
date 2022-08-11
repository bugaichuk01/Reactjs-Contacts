import {AuthActions, IAuthState, FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS} from "../../types/Auth";

const initialState: IAuthState = {
    auth: false,
    loading: false,
    error: false
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: action.payload
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                auth: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}