// src/components/Notification.js

import React from 'react';
import '../styles/Notification.css'; // Import CSS for styling

const Notification = ({ message, onClose }) => {
  const notificationClass = `notification ${message.type}`;

  return (
    <div className={notificationClass}>
      <span>{message.text}</span>
      <button onClick={onClose} className="btn btn-close">Close</button>
    </div>
  );
};

export default Notification;