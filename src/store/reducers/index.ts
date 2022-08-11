import {combineReducers} from "redux"
import {contactsReducer} from "./contactsReducer"
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>