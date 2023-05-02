import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

import store from "./redux/store";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="container mx-auto p-5">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
