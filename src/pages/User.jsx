import React, { useState } from 'react'
import { UserProvider } from '../context/UserContext'
import UserForm from '../components/UserForm'
import UserTable from '../components/UserTable'
import { Link } from 'react-router-dom'

export default function User() {
    const [dark, setDark] = useState("dark");
    const toggleDark = () => {
        if (dark === "dark") {
            setDark("medium");
        } else if (dark === "medium") {
            setDark("light");
        } else {
            setDark("dark");
        }
    };

    return (
        <div>
            <UserProvider>
                <div className="App">
                    <h1>User Management</h1>
                    <Link to="/blog">blog</Link>
                    <UserForm />
                    <UserTable />
                    <p> {dark}</p>
                    <button onClick={toggleDark}>
                       button
                    </button>
                </div>
            </UserProvider>
        </div>
    )
}
