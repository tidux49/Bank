import './Navbar.css';
import logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { logout } from '../redux/actions/login-action';
const Navbar = () => {
  const [connection, setConnection] = useState(false);
  const {connect} = useSelector((state)=>state.loginReducer);
  const {userinfo}  =useSelector((state)=>state.userinfoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setConnection(connect);
  }, [connect]);

  const handleLogout = () => {
    dispatch(logout());;
  }


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
      {connection ? (
          <Link className="main-nav-item" to="/" onClick={handleLogout}>
            <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle" />
            <p>{userinfo && userinfo.userName}</p>
            Sign Out
          </Link>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
