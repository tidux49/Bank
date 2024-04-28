import './Header.css';
import { useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { putusername } from '../redux/actions/login-action';
import { postusername } from '../redux/actions/login-action';

const Header = () => {
  const { userinfo } = useSelector((state) => state.userinfoReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const form = useRef();
  const {token} = useSelector((state)=>state.loginReducer);
  const handleEditNameClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const param = {
    userName : form.current[0].value,}
    dispatch(putusername(token,param));
    console.log(JSON.stringify(userinfo));
    handleCloseModal();
  };
  const {newusername} = useSelector((state)=>state.newusernameReducer);
  useEffect(() => {
    if(newusername != null){
      dispatch(postusername(token));}
  }, [newusername]);


  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {userinfo && userinfo.firstName} {userinfo && userinfo.lastName}</h1>
      <button className="edit-button" onClick={handleEditNameClick}>Edit Name</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h1 className="close" onClick={handleCloseModal}>x</h1>
            <h2>Your new Username</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <input type="text" required />
              <button type="submit" className="button_modal">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
