import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const _URL: string = 'http://localhost:3001/user';

export const login = createAsyncThunk(
    'contacts/fetchContacts',
    async (arg: { email: string, password: string }, thunkAPI) => {
        const {email, password} = arg;
        try {
            const response = await axios.get(`${_URL}?email=${email}`);
            if (response.status === 200) {
                if (response.data.password === password) {
                    localStorage.setItem('authenticate', 'true');
                    window.location.reload();
                    return response.data;
                }
            }
        } catch (e) {
            return thunkAPI.fulfillWithValue('Не удалось загрузить контакты')
        }
    }
)