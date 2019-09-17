import React, {useState} from 'react'
import axios from 'axios'
import {setAuthenticationHeader} from '../utils/authenticate'
import './Login.css'

function Login() {
    const [user, setUser] = useState({username: '', password: ''})

    const handleLogin = () => {
        axios.post('http://localhost:3001/login', {
            username: user.username,
            password: user.password
        }).then(response => {
            const token = response.data.token
            //save token in local storage
            localStorage.setItem('jsonwebtoken', token)
            //set default axios header
            setAuthenticationHeader(token)
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
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Login