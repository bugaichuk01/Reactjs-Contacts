import {
    ADD_CONTACT,
    ContactsActions,
    DELETE_CONTACT,
    EDIT_CONTACT,
    FETCH_CONTACTS,
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_SUCCESS,
    IAddContact,
    IContact,
    IDeleteContact,
    IEditContact,
    IFetchContacts,
    IFetchContactsError,
    IFetchContactsSuccess,
    ISearchContact,
    SEARCH_CONTACT
} from "../../types/Contacts";
import {Dispatch} from "react";
import axios from "axios";

const _URL: string = 'http://localhost:3001/contacts';

const fetchContactsAction = (): IFetchContacts => ({
    type: FETCH_CONTACTS
});

const fetchContactsSuccessAction = (payload: IContact[]): IFetchContactsSuccess => ({
    type: FETCH_CONTACTS_SUCCESS,
    payload
});

const fetchContactsErrorAction = (payload: Error): IFetchContactsError => ({
    type: FETCH_CONTACTS_ERROR,
    payload
});

const addContactAction = (payload: IContact): IAddContact => ({
    type: ADD_CONTACT,
    payload
});

const editContactAction = (payload: IContact): IEditContact => ({
    type: EDIT_CONTACT,
    payload
});

const deleteContactAction = (payload: number): IDeleteContact => ({
    type: DELETE_CONTACT,
    payload
});

export const fetch = () => {
    return async (dispatch: Dispatch<ContactsActions>) => {
        dispatch(fetchContactsAction());

        await axios.get(_URL)
            .then(r => dispatch(fetchContactsSuccessAction(r.data)))
            .catch(e => dispatch(fetchContactsErrorAction(e)))
    }
}

export const addContact = (payload: IContact) => {
    return async (dispatch: Dispatch<ContactsActions>) => {
        await axios.post(_URL, payload)
            .then(r => dispatch(addContactAction(payload)))
            .catch(e => dispatch(fetchContactsErrorAction(e)))
    }
}

export const editContact = (payload: IContact) => {
    return async (dispatch: Dispatch<ContactsActions>) => {
        await axios.put(`${_URL}/${payload.id}`, payload)
            .then(r => dispatch(editContactAction(payload)))
            .catch(e => dispatch(fetchContactsErrorAction(e)))
    }
}

export const deleteContact = (payload: number) => {
    return async (dispatch: Dispatch<ContactsActions>) => {
        await axios.delete(`${_URL}/${payload}`)
            .then(r => dispatch(deleteContactAction(payload)))
            .catch(e => dispatch(fetchContactsErrorAction(e)))
    }
}

export const searchContact = (payload: string): ISearchContact => ({
    type: SEARCH_CONTACT,
    payload
});