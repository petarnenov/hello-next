import React from 'react';
import User from '../components/user/user';

const UsersList = ({ users, error }) => {
  return (
    <div>
      <h1>User List</h1>
      {error}
      {Array.isArray(users) &&
        users.map((user) => (
          <User name={user.name} email={user.email} key={user.id} />
        ))}
    </div>
  );
};

export default UsersList;

export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (res) => {
      const users = await res.json();
      return { users };
    })
    .catch((err) => ({ error: JSON.stringify(err) }));

  return {
    props: data,
  };
}
