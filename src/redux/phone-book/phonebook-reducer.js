import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './phonebook-actions';

import initialContactList from '../../components/initialContactList.json';

const contactsReducer = createReducer(initialContactList, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default phonebookReducer;
