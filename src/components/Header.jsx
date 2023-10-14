import { Link } from "react-router-dom";
import { useDateDispatch } from "../contexts/DateContext";

const Header = () => {
  const dateDispatch = useDateDispatch();
  return (
    <div className="headerMain">
      <Link to={`/`} onClick={() => dateDispatch({type: "ZERO"})}>
        home
      </Link>
      <Link to={`/about`}>
        about
      </Link>
      <Link to={'/words'}>
        liked
      </Link>
      <Link to={`/login`}>
        login
      </Link>
    </div>
  );
};

export default Header;
