import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import NotFound from "./common/components/NotFound";
import "./helper/axiosHelper";
import { useSelector } from "react-redux";
import { Suspense } from "react";

const Cart = React.lazy(() => import("./pages/Cart/Cart"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default App;
