import React, { useState, useContext } from 'react';
import MessageContext from '../../stores/MessageContext';
import Item from '../../components/Item';
import './styles.scss';

const Screen = (props) => {
  const messageContext = useContext(MessageContext);
  
  return (
    <div className="screen">
      <div className="button-container">
        <button onClick={messageContext.getMessage}>Get Message</button>
      </div>
      <Item text={messageContext.message} />
    </div>
  );
};

export default Screen;
