export const getContact = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilterName = state => {
  const contacts = getContact(state);
  const filter = getFilter(state);
  const normalizedName = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName),
  );
};
