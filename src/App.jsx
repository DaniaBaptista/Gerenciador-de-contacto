import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/contactform';
import ContactList from './components/ContactList/ContactList';
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (updatedContact) => {
    setContacts(contacts.map((contact) => contact.email === updatedContact.email ? updatedContact : contact));
    setContactToEdit(null);
  };

  const deleteContact = (contactToDelete) => {
    setContacts(contacts.filter((contact) => contact.email !== contactToDelete.email));
  };

  const clearEdit = () => {
    setContactToEdit(null);
  };

  return (
    <div className='gerenciador'>
      <ContactForm 
        addContact={addContact} 
        editContact={editContact} 
        contactToEdit={contactToEdit} 
        clearEdit={clearEdit} 
      />
      <ContactList 
        contacts={contacts} 
        editContact={setContactToEdit} 
        deleteContact={deleteContact} 
        setContactToEdit={setContactToEdit} 
      />
    </div>
  );
};

export default App;