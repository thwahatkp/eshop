import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import NotFound from "./common/components/NotFound";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "./helper/axiosHelper";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
          {!user.logged && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
