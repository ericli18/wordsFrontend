import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useUserValue } from "../contexts/UserContext";

const Login = () => {
  const user = useUserValue();
  if (!user) {
    return (
      <div className="login-form">
        <LoginForm />
        <RegisterForm />
      </div>
    );
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
