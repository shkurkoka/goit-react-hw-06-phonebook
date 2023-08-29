import React from "react";
import {ContactItem} from "./ContactItem";
import { useSelector } from "react-redux";

export const ContactList = () => {
  let contacts = useSelector(store => store.contacts.contacts);
  let filter = useSelector(store => store.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }


  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};