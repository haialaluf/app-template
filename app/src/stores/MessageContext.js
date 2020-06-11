import React, { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import PropTypes from 'prop-types';
import { getMessage as apiGetMessage } from '../helpers/api';
import { filter } from 'rxjs/operators';

class MessageStore {
  message = (new Subject()).pipe(filter(value => value));

  getMessage = async () => {
    const message = await apiGetMessage();
    this.message.next(message);
  }
}

const MessageContext = React.createContext();

export default MessageContext;

const messageStore = new MessageStore()

export const getMessage = messageStore.getMessage;

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    messageStore.message.subscribe(setMessage)
  }, []);
  return (
    <MessageContext.Provider value={message}>
      {children}
    </MessageContext.Provider>
  );
};

MessageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
