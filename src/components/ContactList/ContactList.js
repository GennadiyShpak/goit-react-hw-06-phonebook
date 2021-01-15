import { connect } from 'react-redux';

import propTypes from 'prop-types';

import s from './Contats.module.css';
import actions from '../../redux/phone-book/phonebook-actions';

function ContactList({ contacts }, onDelete) {
  console.log(onDelete);
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
          <button type="button" onClick={onDelete} className={s.contactBtn}>
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

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
