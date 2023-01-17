import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

const LS_KEY = 'contacts';
const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Roy Jones', number: '285-11-86' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    return initContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }, { resetForm }) => {
    if (isInContact(contacts, name).length > 0) {
      return toast.error(`${name} is already in the contact list`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, contact]);
    resetForm();
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const isInContact = (contacts, newName) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(newName.toLowerCase().trim())
    );
  };

  return (
    <>
      <GlobalStyle />
      <Toaster />
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 && (
          <Filter value={filter} onChange={e => setFilter(e.target.value)} />
        )}
        <ContactList
          contacts={!filter ? contacts : visibleContacts}
          onClick={deleteContact}
        />
      </div>
    </>
  );
};
