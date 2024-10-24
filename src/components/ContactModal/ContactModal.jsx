import React from 'react';

const ContactModal = ({ contact, onClose }) => {
  return (
    <div>
      <div>
        <h2>Informações do Contato</h2>
        <p>Nome: {contact.name}</p>
        <p>E-mail: {contact.email}</p>
        <p>Telefone: {contact.phone}</p>
        <p>Empresa: {contact.company}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ContactModal;