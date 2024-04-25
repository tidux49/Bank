import axios from "axios";

export const POST_LOGIN = "POST_LOGIN";

export const loginfetch = (datalogin) => {
    return async (dispatch) => {
      const {data} = await axios.post("http://localhost:3001/api/v1/user/login", datalogin).then((res) => {
        dispatch({ type: POST_LOGIN, payload: data });
      });
    };
  };