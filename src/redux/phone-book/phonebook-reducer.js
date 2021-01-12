import { combineReducers } from 'redux';

import initialContactList from '../../components/initialContactList.json';
// const INITIAL_STATE = {
//   name: '',
//   id: '',
//   number: '',
// };

// const formReducer = (state = INITIAL_STATE, actions) => state;

const contactReducer = (state = initialContactList, actions) => state;
const filterReducer = (state = '', actions) => state;

const phonebookReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
export default phonebookReducer;
