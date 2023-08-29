import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ""
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {
        addContact: (state, action) => {
            const newContact = {
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number
            };
            state.contacts.push(newContact);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        }
    }
});

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState.filter,
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export const rootReducer = {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer
};