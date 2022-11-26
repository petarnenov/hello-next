import React from 'react';

import styles from './user.module.css';

const User = ({ name, email }) => {
  return (
    <div className={styles.container}>
      <div>Name {name}</div>
      <div>Email {email}</div>
    </div>
  );
};

export default User;
