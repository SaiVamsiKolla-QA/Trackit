// web/src/components/common/Loading.jsx - Loading component
import React from 'react';
import './Loading.css';

const Loading = ({ message = 'Loading...', size = 'medium' }) => {
  return (
    <div className="loading">
      <div className={`loading__spinner loading__spinner--${size}`}></div>
      <p className="loading__message">{message}</p>
    </div>
  );
};

export default Loading;
