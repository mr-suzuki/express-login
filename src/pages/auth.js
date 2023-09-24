import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />   
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                username, password,
            });
            alert("You are now logged in!")
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' onChange={(event) => {setUsername(event.target.value)}}></input>
                    <input type='password' id='password' onChange={(event) => {setPassword(event.target.value)}}></input>
                    <button type="submit" id="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                username, password,
            });
            alert("registration complete, please try to login now.")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' onChange={(event) => {setUsername(event.target.value)}}></input>
                    <input type='password' id='password' onChange={(event) => {setPassword(event.target.value)}}></input>
                    <button type="submit" id="submit">Login</button>
                </div>
            </form>
        </div>
    );
}