import { createAction } from '@reduxjs/toolkit';

import shortid from 'short-id';

const addContact = createAction('contact/add', contact => ({
  payload: {
    name: contact.name,
    number: contact.number,
    id: shortid.generate(),
  },
}));
const deleteContact = createAction('contact/delete');
const filterContact = createAction('contact/change');

const actions = { addContact, deleteContact, filterContact };
export default actions;
