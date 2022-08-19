import {
    IContact, ContactsState
} from "../../types/Contacts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addContact, deleteContact, editContact, fetchContacts} from "../actions/contactsActions";

const initialState: ContactsState = {
    contacts: null,
    filtered: null,
    loading: false,
    error: '',
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        searchContact(state, action: PayloadAction<string>) {
            if (!state.contacts || !state.filtered) return
            state.filtered = state.contacts.filter((contact) => {
                return Object.keys(contact).some((key) =>
                    contact[key].toString().toLowerCase().includes(action.payload)
                );
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchContacts.fulfilled, (state, action: PayloadAction<IContact[]>) => {
            state.contacts = action.payload;
            state.filtered = state.contacts;
            state.loading = false;
        })
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.error = action.error.message;
            state.contacts = null;
            state.loading = false;
        })
        builder.addCase(addContact.fulfilled, (state, action: PayloadAction<IContact>) => {
            if (!state.contacts || !state.filtered) return
            state.contacts.push(action.payload);
            state.filtered = state.contacts;
        })
        builder.addCase(editContact.fulfilled, (state, action: PayloadAction<IContact>) => {
            if (!state.contacts || !state.filtered) return
            state.contacts = state.contacts.map((contact) => (contact.id === action.payload.id ? action.payload : contact));
            state.filtered = state.contacts;
        })
        builder.addCase(deleteContact.fulfilled, (state, action: PayloadAction<number>) => {
            if (!state.contacts || !state.filtered) return
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
            state.filtered = state.contacts;
        })
    }
})

export default contactsSlice.reducer