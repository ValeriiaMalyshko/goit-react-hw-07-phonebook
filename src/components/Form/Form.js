import React, { useState } from 'react';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Form.module.css';
// import { connect } from 'react-redux';
import { useCreateContactMutation } from 'redux/contactsSlice';

const Form = () => {
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`There is something wrong`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <label htmlFor={nameInputId} className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>
      <br />
      <label htmlFor={numberInputId} className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>
      <button className={s.btn} type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
