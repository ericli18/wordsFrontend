import { Link } from "react-router-dom";
import { useDateDispatch } from "../contexts/DateContext";
import { useUserValue, useUserDispatch } from "../contexts/UserContext";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  const dateDispatch = useDateDispatch();
  const user = useUserValue();
  const dispatchUser = useUserDispatch();

  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.removeItem("loggedUser");
    dispatchUser({ type: "CLEAR_USER" });
};

  const welcomeForm = () => (
    <div>
        <div>Welcome, {user.username}!</div>
        <form onSubmit={handleLogout}>
            <button type='submit'>log out</button>
        </form>
    </div>
);

  return (
    <div className='headerMain'>
      <Link to={`/`} onClick={() => dateDispatch({ type: "ZERO" })}>
        Home
      </Link>
      <Link to={`/about`}>About</Link>
      <Link to={"/words"}>Liked</Link>
      {user ? welcomeForm() : <Link to='/login'>login</Link>}
    </div>
  );
};

export default Header;
