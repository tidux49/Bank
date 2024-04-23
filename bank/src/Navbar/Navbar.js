import './Navbar.css';
import logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="./sign-in">
        <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
