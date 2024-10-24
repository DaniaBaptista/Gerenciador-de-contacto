import React, { useState, useEffect } from 'react';
import './style.css'

const ContactForm = ({ addContact, editContact, contactToEdit, clearEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setEmail(contactToEdit.email);
      setPhone(contactToEdit.phone);
      setCompany(contactToEdit.company);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      editContact({ name, email, phone, company });
      clearEdit();
    } else {
      addContact({ name, email, phone, company });
    }
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="E-mail" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="tel" 
        placeholder="Telefone" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Empresa" 
        value={company}
        onChange={(e) => setCompany(e.target.value)} 
      />
      <button type="submit">{contactToEdit ? 'Atualizar Contato' : 'Adicionar Contato'}</button>
    </form>
  );
};

export default ContactForm;