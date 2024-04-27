import axios from "axios";
export const POST_LOGIN = "POST_LOGIN";
export const FAIL_LOGIN = "FAIL_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const POST_USERINFO = "POST_USERINFO";
export const PUT_USERNAME = "PUT_USERNAME";

export const loginfetch = (datalogin) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", datalogin);
      
      if(response.status === 200){
        const token = response.data.body.token;
        dispatch({ type: POST_LOGIN, payload: token });
      }

      // Dispatch the token for further actions if needed
      // dispatch({ type: SOME_OTHER_ACTION, payload: token });
    } catch (error) {
      if(error.response.status === 400 ){
        const message_fail_login = "vos identifiants sont incorrects"
        dispatch({ type: FAIL_LOGIN, payload: message_fail_login });
      }
      else{
        const message_error_login = "Erreur du serveur"
        dispatch({ type: ERROR_LOGIN, payload: message_error_login });
      }
      // Gérer les erreurs de connexion ici
      console.error("Erreur lors de la connexion:", error);
    }
  };
};


export const postusername = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/profile",null,config);
      const userinfo = response.data.body;
        dispatch({ type: POST_USERINFO, payload: userinfo });
    }
   catch (error) {};}}
   

   export const putusername = (token,param) => {

    const auto = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    return async (dispatch) => {
      try {
        const response = await axios.put("http://localhost:3001/api/v1/user/profile",param,auto);;
          dispatch({ type: PUT_USERNAME, payload: param });
      }
     catch (error) {};}}   