// src/components/UserList.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserList = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} >
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
