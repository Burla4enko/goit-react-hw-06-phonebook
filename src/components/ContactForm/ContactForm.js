import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  ContactFormStyled,
  Input,
  MessageSpan,
  Button,
  Label,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };
  const NUMBER_PTTRN =
    /\+?\d{1,4}?[-\d\s]?\(?\d{1,3}?\)?[-\d\s]?\d{1,4}[-\d\s]?\d{1,4}[-\d\s]?\d{1,9}/;
  const errorMsgNumb =
    'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +';
  const NAME_PTTRN =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const errorMsgName = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
  const scheme = yup.object().shape({
    name: yup.string().min(3).matches(NAME_PTTRN, errorMsgName).required(),
    number: yup.string().matches(NUMBER_PTTRN, errorMsgNumb).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={scheme}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
