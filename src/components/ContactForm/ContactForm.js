import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  ContactFormStyled,
  Input,
  MessageSpan,
  Button,
  Label,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { validationScheme } from 'utils/validationSchema';
import { isInContact } from 'utils/isInContact';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const initialValues = { name: '', number: '' };

  const onSubmit = ({ name, number }, { resetForm }) => {
    if (isInContact(contacts, name).length > 0) {
      return toast.error(`${name} is already in the contact list`);
    }

    dispatch(addContact(name, number));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationScheme}
    >
      <ContactFormStyled autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <MessageSpan name="name" component={'span'} />
        </Label>

        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <MessageSpan name="number" component={'span'} />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactFormStyled>
    </Formik>
  );
};
