import PropTypes from 'prop-types';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { ContactListLi, ContactListUl } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListLi key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button type="button" onClick={() => onClick(id)}>
              Delete
            </Button>
          </ContactListLi>
        );
      })}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
