import { Link } from "react-router-dom";
import { useDateDispatch } from "../contexts/DateContext";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  const dateDispatch = useDateDispatch();
  return (
    <div className="headerMain">
      <Link to={`/`} onClick={() => dateDispatch({type: "ZERO"})}>
        Home
      </Link>
      <Link to={`/about`}>
        About
      </Link>
      <Link to={'/words'}>
        Liked
      </Link>
      <Link to={`/login`}>
        Login
      </Link>
    </div>
  );
};

export default Header;
