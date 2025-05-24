import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={() => navigate("/axios")}>Axios Page</button>
      <button onClick={() => navigate("/useeffect")}>UseEffect Page</button>
    </div>
  );
}
export default MainPage;