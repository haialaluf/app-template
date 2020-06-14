import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMessage as apiGetMessage } from '../helpers/api';

const MessageContext = React.createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    const message = await apiGetMessage();
    setMessage(message);
  }
  return (
    <MessageContext.Provider value={{message, getMessage}}>
      {children}
    </MessageContext.Provider>
  );
};

MessageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MessageContext;
