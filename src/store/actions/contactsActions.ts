import {IContact} from "../../types/Contacts";
import axios from "axios";
import {AppDispatch} from "../store";
import {contactsSlice} from "../reducers/contactsSlice";

const _URL: string = 'http://localhost:3001/contacts';

export const fetchContacts = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(contactsSlice.actions.fetchContacts());
            const response = await axios.get(_URL);
            dispatch(contactsSlice.actions.fetchContactsSuccess(response.data));
        } catch (e) {
            dispatch(contactsSlice.actions.fetchContactsError('Error'));
        }
    }
}

export const addContact = (payload: IContact) => {
    return async (dispatch: AppDispatch) => {
        try {
            await axios.post(_URL, payload).then(() => dispatch(contactsSlice.actions.addContact(payload)));
        } catch (e) {
            dispatch(contactsSlice.actions.fetchContactsError('Error'))
        }
    }
}

export const editContact = (payload: IContact) => {
    return async (dispatch: AppDispatch) => {
        try {
            await axios.put(`${_URL}/${payload.id}`, payload).then(() => dispatch(contactsSlice.actions.editContact(payload)));
        } catch (e) {
            dispatch(contactsSlice.actions.fetchContactsError('Error'))
        }
    }
}

export const deleteContact = (payload: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await axios.delete(`${_URL}/${payload}`).then(() => dispatch(contactsSlice.actions.deleteContact(payload)));
        } catch (e) {
            dispatch(contactsSlice.actions.fetchContactsError('Error'))
        }
    }
}