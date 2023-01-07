import styled from 'styled-components';

export const ContactListUl = styled.ul`
  margin-left: 20px;
  padding-left: 10px;
`;

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  font-weight: 500;

  span {
    text-transform: capitalize;
  }

  button {
    margin-left: 10px;
  }
`;
