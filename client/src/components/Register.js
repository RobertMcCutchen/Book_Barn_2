import React, {useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import './Login.css'

function Register() {
    const [user, setUser] = useState({username: '', password: ''})

    const handleRegister = () => {
        axios.post('http://localhost:3001/register', {
            username: user.username,
            password: user.password
        }).then(response => {
            console.log(response.data)
        })
    }

    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="loginBox">
            <input type="text" name="username" onChange={(e) => handleTextChange(e)} placeholder="Enter username"/>
            <input type="password" name="password" onChange={(e) => handleTextChange(e)} placeholder="Enter password"/>
            <button onClick={() => handleRegister()}>Register</button>
            <div style={{width: '100%', textAlign: 'center', marginBottom: '5px'}}>
                <span style={{color: 'white', textDecoration: 'none'}}>Already registered? <NavLink to="/login" style={{color: 'white', textDecoration: 'none', pointer: 'cursor'}}>Click here!</NavLink></span>
            </div>
        </div>
    )
}

export default Register