import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import NotFound from "./common/components/NotFound";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
