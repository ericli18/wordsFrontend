import LoginForm from "./LoginForm";

const Header = ({ user, setUser }) => {
  return (
    <div>
      <LoginForm user={user} setUser={setUser}/>
    </div>
  );
};

export default Header;
