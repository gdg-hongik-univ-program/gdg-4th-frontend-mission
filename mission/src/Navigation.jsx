import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex space-x-4 p-4 bg-purple-100 text-purple-800 font-semibold text-lg justify-center">
      <Link to="/" className="hover:underline">Main</Link>
      <Link to="/axios" className="hover:underline">AxiosPage</Link>
      <Link to="/useeffect" className="hover:underline">UseEffectPage</Link>
    </nav>
  );
}

