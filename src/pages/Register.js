import {useState} from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";

const accountBaseUrl = 'http://localhost:8082/account'

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState(true);

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
            <div>
                <form>
                    <input type={"text"} placeholder={"email"} onChange={event => setEmail(event.target.value)}/>
                    <input type={"text"} placeholder={"password"} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={loginUser}>Login</button>
                </form>
                <p>Don't have an account? Sign up now!</p>
                <button onClick={changeToSignUp}>Sign Up</button>
            </div>
        );
    } else {
        return (
            <div>
                <form>
                    <input type={"text"} placeholder={"email"} onChange={event => setEmail(event.target.value)}/>
                    <input type={"text"} placeholder={"password"} onChange={event => setPassword(event.target.value)}/>
                    <input type={"text"} placeholder={"username"} onChange={event => setUsername(event.target.value)}/>
                    <button onClick={signUpUser}>Sign Up</button>
                </form>
                <p>Back to Login</p>
                <button onClick={changeToLogin}>Login</button>
            </div>
        )
    }
}

export default Register;