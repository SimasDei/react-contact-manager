import contactTypes from './types';

export const getContacts = () => ({
  type: contactTypes.GET_CONTACTS,
});
