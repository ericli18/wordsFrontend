import userService from "../services/user";
import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    if (event.target.favorite_color.value !== "") {
      return;
    }
    if (password !== passwordConfirmation) {
      setErrorMessage("Passwords do not match");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }
    try {
      await userService.create({ username: username, password: password });
      setUsername("");
      setPassword("");
      setPasswordConfirmation("");
      navigate("/login");
    } catch (exception) {
      setErrorMessage("Username already exists");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <div>
        {errorMessage !== "" ? (
          <div style={{ color: "red" }}>{errorMessage}</div>
        ) : null}
      </div>
      <form onSubmit={handleRegister}>
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
        <div>
          confirm password:
          <input
            type='password'
            value={passwordConfirmation}
            name='passwordConfirmation'
            onChange={({ target }) => setPasswordConfirmation(target.value)}
          />
        </div>
        <input type='hidden' name='favorite_color' value='' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
