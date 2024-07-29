// src/components/UserTable.js
import React, { useContext } from 'react';
import { UserContext, UserProvider } from '../context/UserContext';

const UserTable = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <UserProvider>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => deleteUser(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </UserProvider>
  );
};

export default UserTable;
