// src/components/UserForm.js
import React, { useState, useContext } from 'react';
import { UserContext, UserProvider } from '../context/UserContext';

const UserForm = () => {
  const { addUser, updateUser } = useContext(UserContext);
  const [form, setForm] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form._id) {
      updateUser(form._id, form);
    } else {
      addUser(form);
    }
    setForm({ username: '', email: '', password:''});
  };

  return (
    <UserProvider>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
    </UserProvider>
  );
};

export default UserForm;
