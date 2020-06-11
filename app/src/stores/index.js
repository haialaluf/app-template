import React from 'react';
import { MessageProvider } from './MessageContext';

export default (App) => (props) => (
    <MessageProvider>
        <App {...props} />
    </MessageProvider>
)