import loginService from "../services/login";
import wordService from "../services/words";
import { useState } from "react";
import { useUserDispatch, useUserValue } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatchUser = useUserDispatch();
    const user = useUserValue();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await loginService.login({ username, password });
            dispatchUser({ type: "SET_USER", payload: user });
            wordService.setToken(user.token);
            window.localStorage.setItem("loggedUser", JSON.stringify(user));
            setUsername("");
            setPassword("");
            navigate("/words");
        } catch (exception) {
            console.log(exception);
        }
    };

    const loginForm = () => (
        <form onSubmit={handleLogin}>
            <div>
                username:
                <input
                    type='text'
                    value={username}
                    name='username'
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                password:
                <input
                    type='password'
                    value={password}
                    name='password'
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button type='submit'>login</button>
        </form>
    );

    return <div>{loginForm()}</div>;
};

export default LoginForm;
