import React from 'react';
import { connect } from 'react-redux';

import contactTypes from '../../redux/actions/types';

import Contact from './Contact';

const Contacts = ({ contacts }) => (
  <React.Fragment>
    <h1 className='display-4 mb-2'>
      <span className='text-danger'>Contact</span> List
    </h1>
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} />
    ))}
  </React.Fragment>
);

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
});
const mapDispatchToProps = dispatch => ({
  getContacts: dispatch => dispatch({ type: contactTypes.GET_CONTACTS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
