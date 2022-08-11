export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ContactsState {
    contacts: IContact[],
    filtered: IContact[],
    loading: boolean;
    error: Error | null;
}

// action types
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR";
export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SEARCH_CONTACT = "SEARCH_CONTACT";

// action interfaces
export interface IFetchContacts {
    type: typeof FETCH_CONTACTS;
}

export interface IFetchContactsSuccess {
    type: typeof FETCH_CONTACTS_SUCCESS;
    payload: IContact[];
}

export interface IFetchContactsError {
    type: typeof FETCH_CONTACTS_ERROR;
    payload: Error;
}

export interface IDeleteContact {
    type: typeof DELETE_CONTACT;
    payload: number;
}

export interface IAddContact {
    type: typeof ADD_CONTACT;
    payload: IContact;
}

export interface IEditContact {
    type: typeof EDIT_CONTACT;
    payload: IContact;
}

export interface ISearchContact {
    type: typeof SEARCH_CONTACT;
    payload: string;
}

export type ContactsActions = IFetchContacts | IFetchContactsSuccess | IFetchContactsError | IDeleteContact | IAddContact | IEditContact | ISearchContact