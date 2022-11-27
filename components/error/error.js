import React from 'react';

const Error = ({ error }) => {
  console.error('error:', error);
  return (
    <div>
      <h3>Error {error.message}</h3>
    </div>
  );
};

export default Error;
