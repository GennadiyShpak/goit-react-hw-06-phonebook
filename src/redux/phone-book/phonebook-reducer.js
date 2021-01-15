import { combineReducers } from 'redux';

import types from './phonebook-types';

import initialContactList from '../../components/initialContactList.json';

const contactsReducer = (state = initialContactList, { type, payload }) => {
  switch (type) {
    case types.ADD: {
      console.log(state);
      return [...state, payload];
    }
    case types.DELETE: {
      console.log(state);
      return state.filter(({ id }) => id !== payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = '', actions = '') => state;

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default phonebookReducer;
