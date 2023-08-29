import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", (contName, contNumber) => {
    return{
        payload: {
            name: contName,
            number: contNumber,
        },
    }
});

export const deleteContact = createAction("contacts/deleteContact", taskId => {
    return {
        payload: taskId,
    }
});

export const setFilter = createAction("filter/setFilter", value => {
    return {
        payload: value,
    }
});