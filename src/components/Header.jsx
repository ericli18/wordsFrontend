import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerMain">
      <Link to={`/`}>
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
