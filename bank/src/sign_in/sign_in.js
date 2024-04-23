import './sign_in.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sign_in = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content" >
      <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/user" className="sign-in-button">Sign In</Link>
        </form>
      </section>
    </main>
  );
}

export default Sign_in;
