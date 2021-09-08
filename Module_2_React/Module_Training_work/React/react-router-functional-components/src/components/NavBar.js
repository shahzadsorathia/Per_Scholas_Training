import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> <Link to ="/Giphy">Giphy </Link> </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;

api.giphy.com/v1/gifs/random/