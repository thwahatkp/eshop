import { useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { getLoggedDetails } from "../../redux/reducers/user";

const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(getLoggedDetails());
  }, [dispatch]);

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
