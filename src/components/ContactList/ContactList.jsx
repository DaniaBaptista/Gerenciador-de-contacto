import React from 'react';
import ContactModal from '../ContactModal/contactmodal';

const ContactList = ({ contacts, editContact, deleteContact, setContactToEdit }) => {
  const [selectedContact, setSelectedContact] = React.useState(null);

  return (
    <div>
      {contacts.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        contacts.map((contact, index) => (
          <div key={index}>
            <h3>{contact.name}</h3>
            <button onClick={() => setSelectedContact(contact)}>Ver</button>
            <button onClick={() => setContactToEdit(contact)}>Editar</button>
            <button onClick={() => deleteContact(contact)}>Excluir</button>
          </div>
        ))
      )}
      {selectedContact && (
        <ContactModal 
          contact={selectedContact} 
          onClose={() => setSelectedContact(null)} 
        />
      )}
    </div>
  );
};

export default ContactList;