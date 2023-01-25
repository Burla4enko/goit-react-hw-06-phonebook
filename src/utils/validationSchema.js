import * as yup from 'yup';

const NUMBER_PTTRN =
  /\+?\d{1,4}?[-\d\s]?\(?\d{1,3}?\)?[-\d\s]?\d{1,4}[-\d\s]?\d{1,4}[-\d\s]?\d{1,9}/;
const errorMsgNumb =
  'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +';
const NAME_PTTRN = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const errorMsgName = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;
export const validationScheme = yup.object().shape({
  name: yup.string().min(3).matches(NAME_PTTRN, errorMsgName).required(),
  number: yup.string().matches(NUMBER_PTTRN, errorMsgNumb).required(),
});
