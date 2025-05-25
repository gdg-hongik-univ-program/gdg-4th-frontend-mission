import { useNavigate } from "react-router-dom";

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
