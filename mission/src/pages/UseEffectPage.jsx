import { Link } from 'react-router-dom';

function UseEffectPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">UseEffect Page</h1>

      <Link to="/" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
        Back to Main
      </Link>
    </div>
  );
}

export default UseEffectPage;