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
import { useDispatch, useSelector } from "react-redux";
import { getLoggedDetails, login } from "./redux/reducers/user";
// import dotenv from 'dotenv'
axios.defaults.withCredentials = true
// dotenv.config()


function App() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/"
  const dispatch = useDispatch()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
      // once: true
    });
  }, [])

  useEffect(() => {
    // console.log("called")
    dispatch(getLoggedDetails('call'))
  }, [dispatch])

  const state = useSelector((state) => state)
  console.log(state)

  return (
    <div className="container mx-auto p-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
