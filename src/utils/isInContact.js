export const isInContact = (contacts, newName) => {
  return contacts.filter(
    ({ name }) => name.toLowerCase() === newName.toLowerCase().trim()
  );
};
