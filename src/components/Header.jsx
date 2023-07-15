import loginService from "../services/login";
import { useState } from "react";

const Header = ({ user, setUser }) => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await loginService.login({ username, password });
            setUser(user);
            console.log(user);
        } catch (exception) {
            console.log("----");
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
                    onChange={({ target }) => setuserName(target.value)}
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
            <button type="submit">login</button>
        </form>
    );

    return (
      <div>
        {loginForm()}
      </div>
    )
};

export default Header;
