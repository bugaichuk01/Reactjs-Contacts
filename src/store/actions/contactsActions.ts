import {IContact} from "../../types/Contacts";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const _URL: string = 'http://localhost:3001/contacts';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(_URL);
            return response.data;
        } catch (e) {
            return thunkAPI.fulfillWithValue('Не удалось загрузить контакты')
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact: IContact, thunkAPI) => {
        try {
            const response = await axios.post(_URL, contact);
            return response.data;
        } catch (e) {
            return thunkAPI.fulfillWithValue('Не удалось загрузить контакты')
        }
    }
)

export const editContact = createAsyncThunk(
    'contacts/editContact',
    async (contact: IContact, thunkAPI) => {
        try {
            const response = await axios.put(`${_URL}/${contact.id}`, contact);
            return response.data;
        } catch (e) {
            return thunkAPI.fulfillWithValue('Не удалось загрузить контакты')
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contact: number, thunkAPI) => {
        try {
            const response = await axios.delete(`${_URL}/${contact}`);
            return response.data;
        } catch (e) {
            return thunkAPI.fulfillWithValue('Не удалось загрузить контакты')
        }
    }
)
