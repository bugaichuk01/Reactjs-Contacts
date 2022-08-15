import {
    IContact, ContactsState
} from "../../types/Contacts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ContactsState = {
    contacts: [],
    filtered: [],
    loading: false,
    error: '',
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchContacts(state) {
            state.loading = true;
        },
        fetchContactsSuccess(state, action: PayloadAction<IContact[]>) {
            state.contacts = action.payload;
            state.filtered = action.payload;
            state.loading = false;
        },
        fetchContactsError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
        addContact(state, action: PayloadAction<IContact>) {
            state.contacts.push(action.payload);
            state.filtered.push(action.payload);
        },
        editContact(state, action: PayloadAction<IContact>) {
            state.contacts = state.contacts.map((contact) => (contact.id === action.payload.id ? action.payload : contact));
            state.filtered = state.filtered.map((contact) => (contact.id === action.payload.id ? action.payload : contact));
        },
        deleteContact(state, action: PayloadAction<number>) {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
            state.filtered = state.filtered.filter((contact) => contact.id !== action.payload);
        },
        searchContact(state, action: PayloadAction<string>) {
            state.filtered = state.contacts.filter((contact) => {
                return Object.keys(contact).some((key) =>
                    contact[key].toString().toLowerCase().includes(action.payload)
                );
            })
        }
    }
})

export default contactsSlice.reducer