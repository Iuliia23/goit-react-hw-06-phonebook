import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { ContactListContainer, Title, ContactItem, Name, Number, DeleteButton } from './ContactList.styled';

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    notify.success('Contact deleted');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListContainer>
      <ToastContainer />
      <Title>Contact List</Title>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};


export default ContactList;