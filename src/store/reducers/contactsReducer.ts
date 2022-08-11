import {
    DELETE_CONTACT,
    FETCH_CONTACTS,
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_SUCCESS,
    ADD_CONTACT,
    EDIT_CONTACT,
    IContact, SEARCH_CONTACT, ContactsActions, ContactsState
} from "../../types/Contacts";

const initialState: ContactsState = {
    contacts: [],
    filtered: [],
    loading: false,
    error: null,
}

export const contactsReducer = (state = initialState, action: ContactsActions) => {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                error: null,
                isLoading: true
            }
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload,
                filtered: action.payload,
                error: null,
                isLoading: false
            }
        case FETCH_CONTACTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_CONTACT:
            return {
                ...state,
                filtered: [...state.filtered, action.payload],
                contacts: [...state.contacts, action.payload],
                isLoading: false,
                error: null
            }
        case EDIT_CONTACT:
            return {
                ...state,
                filtered: state.filtered.map((item: IContact) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            ...action.payload
                        }
                    } else return item
                }),
                contacts: state.contacts.map((item: IContact) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            ...action.payload
                        }
                    } else return item
                }),
                isLoading: false, error: null
            }
        case DELETE_CONTACT:
            return {
                ...state,
                filtered: state.filtered.filter((item: IContact) => item.id !== action.payload),
                contacts: state.contacts.filter((item: IContact) => item.id !== action.payload),
                isLoading: false,
                error: null
            }
        case SEARCH_CONTACT:
            return {
                ...state,
                filtered: state.contacts.filter((item: IContact) => {
                    return Object.keys(item).some((key) =>
                        item[key].toString().toLowerCase().includes(action.payload)
                    );
                }),
                isLoading: false,
                error: null
            }
        default:
            return state;
    }
}