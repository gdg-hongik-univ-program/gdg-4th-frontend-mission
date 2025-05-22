import { useNavigate } from "react-router-dom";

function AxiosPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Axios Page</h1>
      <button onClick={() => navigate("/")}>Go to Main Page</button>
      <button onClick={() => navigate("/useeffect")}>Go to UseEffect Page</button>
    </div>
  );
}

export default AxiosPage;
