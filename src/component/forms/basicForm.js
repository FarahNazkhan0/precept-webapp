import React, { useState } from "react";
import WebSocketConnection from "../../webSocketConnection";

const BasicForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])
    const submitForm = (e) => {
        e.preventDefault()
        WebSocketConnection(username, password)
    }
    return (
        <div className="auth-form-container">
        <form action="" onSubmit={submitForm} className="loginform">
            <div className="">
            <h1 className="welcome">Welcome</h1>
            <p>Please login to your account</p>
            </div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} placeholder="JohnDoe"
                onChange={(e) => {setUsername(e.target.value)}}></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} placeholder="***********"
                onChange={(e) => {setPassword(e.target.value)}}></input>
            <div className="row">
            <button type="submit" name="login" id="login" className="btn-login">Login</button>
            <button type="submit" name="signup" id="signup" className="btn-signup">Signup</button>
            </div>
        </form>
        </div>
    )
}

export default BasicForm