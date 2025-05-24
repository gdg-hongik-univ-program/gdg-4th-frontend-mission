import { useNavigate } from 'react-router-dom';

function UseEffectPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>UseEffect Page</h1>
      <button onClick={() => navigate('/')}>Go to Main Page</button>
      <button onClick={() => navigate('/axios')}>Go to Axios Page</button>
    </div>
  );
}

export default UseEffectPage;
