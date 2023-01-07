import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  margin: 10px;
  width: 400px;

  border: 1px solid black;
`;

export const Label = styled.label`
  font-weight: 500;
  position: relative;
  margin: 10px 0;
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 5px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid gray;
`;

export const MessageSpan = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  left: 400px;
  width: 400px;
  padding: 8px;

  background-color: lightgray;
  border-radius: 8px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  padding: 8px 16px;

  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover,
  :focus {
    background-color: darkgray;
    color: white;
  }
`;
