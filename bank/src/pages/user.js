import Header from '../Header/Header';
import Account from '../Account/Account';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect } from 'react';
import { postusername } from '../redux/actions/login-action';

const User_page = () => {

    const dispatch = useDispatch();
    const {token} = useSelector((state)=>state.loginReducer);

    useEffect(() => {
        console.log("Token récupéré:", token);

        
        if (token) {
            dispatch(postusername(token))
       }
        else{
            console.log("pas de token...")
        }
    }, [token, dispatch]);
      
    const {userinfo} = useSelector((state)=>state.userinfoReducer);
    useEffect(() => {
        console.log("information utilisateru " + userinfo);
    }, [userinfo]);


    return(
        <section>
        <Header token-props={token} />
        <Account />
        </section>
    )
}

export default User_page;