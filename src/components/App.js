// import React, { Component } from "react";
import Form from "./Form/Form";
import Filter from "./Filter/Filter";
import ContactList from "./Contacts/ContactList/ContactList";

function App() {
  return (
    <div className="container">
      <h2 className="title">Phonebook</h2>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
