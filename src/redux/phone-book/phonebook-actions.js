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
const filterContact = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, filterContact };
export default actions;
