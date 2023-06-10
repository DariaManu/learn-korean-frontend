import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Register.css'

import axios from "axios";
import {UserContext} from "../context/UserContext";

const accountBaseUrl = 'http://localhost:8082/account'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState(true);

    const {user, setUser, isAuthenticated, setIsAuthenticated} = useContext(UserContext);

    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        console.log("login user");
        console.log(email);
        console.log(password);
        console.log(`${accountBaseUrl}/login`);
        axios.post(`${accountBaseUrl}/login`, {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            let data = response.data;
            setUser({
                id: data.learnerUserId,
                username: data.username,
                progressLevel: data.userProgressLevel
            });
            setIsAuthenticated(true);
            navigate("/learn-korean");
        }).catch(function (error) {
            console.log(error);
        });
    }

    const signUpUser = (event) => {
        event.preventDefault();
        console.log("signUp user");
        console.log(email);
        console.log(password);
        console.log(username);
        axios.post(`${accountBaseUrl}/register`, {
            email: email,
            password: password,
            username: username
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            let data = response.data;
            setUser({
                id: data.learnerUserId,
                username: data.username,
                progressLevel: data.userProgressLevel
            });
            setIsAuthenticated(true);
            navigate("/learn-korean");
        }).catch(function (error) {
            console.log(error);
        });
    }

    const changeToSignUp = (event) => {
        event.preventDefault();
        setLogin(false);
    }

    const changeToLogin = (event) => {
        event.preventDefault();
        setLogin(true);
    }

    if (login) {
        return (
            <div id={'login-div'}>
                <form>
                    <label>Email</label>
                    <br/>
                    <input id={"login-email"} className={"register-form-input"} type={"text"} onChange={event => setEmail(event.target.value)}/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input id={"login-password"} className={"register-form-input"} type={"password"} onChange={event => setPassword(event.target.value)}/>
                    <br/><br/>
                    <button className={"register-button"} onClick={loginUser}>Login</button>
                </form>
                <p>Don't have an account? Sign up now!</p>
                <br/>
                <button className={"register-button"} onClick={changeToSignUp}>Sign Up</button>
            </div>
        );
    } else {
        return (
            <div id={'signup-div'}>
                <form>
                    <label>Email</label>
                    <br/>
                    <input className={"register-form-input"} type={"text"} onChange={event => setEmail(event.target.value)}/>
                    <br/><br/>
                    <label>Password</label>
                    <br/>
                    <input className={"register-form-input"} type={"password"} onChange={event => setPassword(event.target.value)}/>
                    <br/><br/>
                    <label>Username</label>
                    <br/>
                    <input className={"register-form-input"} type={"text"} onChange={event => setUsername(event.target.value)}/>
                    <br/><br/>
                    <button className={"register-button"} onClick={signUpUser}>Sign Up</button>
                </form>
                <br/><br/>
                <button className={"register-button"} onClick={changeToLogin}>Back to Login</button>
            </div>
        )
    }
}

export default Register;