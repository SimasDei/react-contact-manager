import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/actions/contact.actions';

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

export default connect(mapStateToProps, { getContacts })(Contacts);
