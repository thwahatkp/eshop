import { post } from "../../helper/axiosHelper";
import { logout } from "../../redux/reducers/user";
import Cookies from "js-cookie";

export const handleLogout = (dispatch) => {
  post("logout")
    .then((res) => {
      if (res.status === 200) {
        dispatch(logout());
        localStorage.removeItem("details");
        sessionStorage.removeItem("_token");
        Cookies.remove("_token");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
