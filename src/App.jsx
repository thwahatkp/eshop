import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

import store from "./redux/store";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { useSelector } from "react-redux";
axios.defaults.withCredentials = true

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      once: true
    });
  }, [])
  let logged = useSelector((state) => state.userDetails.logged)
  console.log(logged)
  return (
    <div className="container mx-auto p-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page not found</h1>} />

        {
          !logged && <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
