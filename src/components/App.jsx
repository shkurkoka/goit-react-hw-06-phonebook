import React from "react";
import {ContactForm} from "./phoneBook/ContactForm";
import {ContactList} from "./phoneBook/ContactList";
import Filter from "./phoneBook/Filter";
import "./phoneBook/phonebook.css";

export const App = () => {

  return (
    <div className="main">
      <div className="first-wrap">
        <h1>Phonebook</h1>
        <ContactForm/>
      </div>

      <div className="second-wrap">
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </div>
  );

}
