import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center my-48 ">
      <div
        className="text-8xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        404
      </div>
    </div>
  );
};

export default NotFound;
