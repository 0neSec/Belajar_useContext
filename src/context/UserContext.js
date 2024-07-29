// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:3001/api/users', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/users/${id}`, updatedUser);
      setUsers(users.map(user => (user._id === id ? response.data : user)));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
