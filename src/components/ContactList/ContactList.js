import { connect } from 'react-redux';

import propTypes from 'prop-types';

import s from './Contats.module.css';
import actions from '../../redux/phone-book/phonebook-actions';

function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return null;
  }
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
            className={s.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDelete: propTypes.func.isRequired,
};

const getFilterName = (contacts, filter) => {
  const normalizedName = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilterName(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
