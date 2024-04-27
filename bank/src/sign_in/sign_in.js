import './sign_in.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginfetch } from '../redux/actions/login-action';
import { useNavigate } from 'react-router-dom';

const Sign_in = () => {
const form = useRef();
const dispatch = useDispatch();
const navigate = useNavigate();
const {token, message} = useSelector((state)=>state.loginReducer)
useEffect(() => {
  console.log("token= " + token);
  if(token){
    navigate("/user");
  }
  //naviguer vers la page connecté !!!!! //
}, [token]);
//gestion des message alerte erreur
useEffect(() => {
  if(message != null){
  form.current.reset();
  alert(message);}
}, [message]);

const handleForm = async (e) => {
  e.preventDefault();

  const loginData = {
    email: form.current[0].value,
    password: form.current[1].value
  }
  dispatch(loginfetch(loginData));
  }


  return (
    <main className="main bg-dark">
      <section className="sign-in-content" >
      <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e)=> handleForm(e)}>
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
          <button className="sign-in-button" type='submit'>Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Sign_in;
