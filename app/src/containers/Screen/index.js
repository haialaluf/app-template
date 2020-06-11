import React, { useState, useContext } from 'react';
import MessageContext, { getMessage } from '../../stores/MessageContext';
import Item from '../../components/Item';
import './styles.scss';

const Screen = (props) => {
  const message = useContext(MessageContext);
  
  return (
    <div className="screen">
      <div className="button-container">
        <button onClick={getMessage}>Get Message</button>
      </div>
      <Item text={message} />
    </div>
  );
};

export default Screen;
