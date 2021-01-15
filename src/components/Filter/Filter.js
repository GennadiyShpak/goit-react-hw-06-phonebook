import React from 'react';
import { connect } from 'react-redux';

import s from './Filter.module.css';
import actions from '../../redux/phone-book/phonebook-actions';

function Filter({ value, onChange }) {
  return (
    <>
      <label className={s.filterLabel}>
        Find contact by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name to filter"
        />
      </label>
    </>
  );
}

const mapStateToProps = state => ({
  filter: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: ({ target }) => dispatch(actions.filterContact(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
