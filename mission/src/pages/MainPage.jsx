import { useNavigate } from "react-router-dom";
import axiosInstance from "../httpCount";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => navigate("/axios")}>Go to Axios Page</button>
      <button onClick={() => navigate("/useeffect")}>Go to UseEffect Page</button>
    </div>
  );
}

export default MainPage;
