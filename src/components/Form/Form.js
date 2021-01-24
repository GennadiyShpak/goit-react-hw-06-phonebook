import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';

import actions from '../../redux/phone-book/phonebook-actions';
import s from './Form.module.css';

const Form = () => {
  const [contact, setContact] = useState();
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const onSubmit = useCallback(data => dispatch(actions.addContact(data)), [
    dispatch,
  ]);

  const oninputHandler = ({ target }) => {
    const { name, value } = target;
    setContact(contacts => ({ ...contacts, [name]: value }));
  };

  const onSubmitHandler = () => {
    const { name, number } = contact;
    !name || !number ? alert(`Some field are empty`) : onSubmit(contact);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={s.a}>
      <label className={s.label}>
        Name
        <input
          type="text"
          ref={register}
          name="name"
          onChange={oninputHandler}
          placeholder="Enter name"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          ref={register}
          name="number"
          onChange={oninputHandler}
          placeholder="Enter phone number"
        />
      </label>

      <button type="submit" className={s.addBtn}>
        Add contact
      </button>
    </form>
  );
};
export default Form;
