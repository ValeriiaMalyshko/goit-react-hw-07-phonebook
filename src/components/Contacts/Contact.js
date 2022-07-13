import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={s.li}>
      <span>
        {name} : {number}
      </span>
      <button className={s.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
