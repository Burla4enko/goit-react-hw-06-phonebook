import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { ContactListLi, ContactListUl } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ContactListUl>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactListLi key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ContactListLi>
        );
      })}
    </ContactListUl>
  );
};
