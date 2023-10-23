import { useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { generateAccessToken, getLoggedDetails } from "../../redux/reducers/user";
import { handleLogout } from "../functions/logout";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getLoggedDetails());

    if (!localStorage.getItem("rememberMe") && !sessionStorage.getItem("_token")) {
      handleLogout(dispatch);
    }
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = setInterval(() => {
      if (user.logged) {
        dispatch(generateAccessToken());
      }
      // }, 3000);
    }, 840000);

    return () => {
      clearInterval(refreshToken);
    };
  });

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
