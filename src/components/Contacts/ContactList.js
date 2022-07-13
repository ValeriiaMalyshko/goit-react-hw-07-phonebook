import React from 'react';
// import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './Contact.module.css';
import { useFetchContactsQuery } from 'redux/contactsSlice';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery;
  return (
    <ul className={s.ul}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
