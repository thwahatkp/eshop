import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
