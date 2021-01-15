import shortid from 'short-id';

import types from './phonebook-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: { name: name, number: number, id: shortid.generate() },
});
const deleteContact = contactid => ({
  type: types.DELETE,
  payload: contactid,
});

const actions = { addContact, deleteContact };
export default actions;
