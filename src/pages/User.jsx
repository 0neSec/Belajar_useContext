import React, { useState } from 'react'
import { UserProvider } from '../context/UserContext'
import UserForm from '../components/UserForm'
import UserTable from '../components/UserTable'
import { Link } from 'react-router-dom'

export default function User() {
    const[dark,setDark] = useState(["dark", "medium", "light"]);
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

    const toggleDark = () => {
        setDark((prevDark)=>(dark.length + 1))
        setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % dark.length);
    }

    return (
        <div>
            <UserProvider>
                <div className="App">
                    <h1>User Management</h1>
                    <Link to="/blog">blog</Link>
                    <UserForm />
                    <UserTable />
                    <p> {dark[currentThemeIndex]}</p>
                    <button onClick={toggleDark}>
                        button
                    </button>
                </div>
            </UserProvider>
        </div>
    )
}
