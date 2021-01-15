import { combineReducers } from 'redux';

import types from './phonebook-types';

import initialContactList from '../../components/initialContactList.json';

const contactsReducer = (state = initialContactList, { type, payload }) => {
  switch (type) {
    case types.ADD: {
      return [...state, payload];
    }
    case types.DELETE: {
      return state.filter(({ id }) => id !== payload);
    }
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER: {
      return payload;
    }

    default:
      return state;
  }
};

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default phonebookReducer;
