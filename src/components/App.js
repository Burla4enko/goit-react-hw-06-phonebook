import { nanoid } from 'nanoid';
import { Component } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContact = JSON.parse(localStorage.getItem(LS_KEY));
    savedContact && this.setState({ contacts: [...savedContact] });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

  isInContact = (contacts, newName) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(newName.toLowerCase().trim())
    );
  };

  addContact = ({ name, number }, { resetForm }) => {
    if (this.isInContact(this.state.contacts, name).length > 0) {
      return toast.error(`${name} is already in the contact list`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    resetForm();
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return (
      <>
        <GlobalStyle />
        <Toaster />
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.filterContact} />
          <ContactList
            contacts={!filter ? contacts : visibleContacts}
            onClick={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
