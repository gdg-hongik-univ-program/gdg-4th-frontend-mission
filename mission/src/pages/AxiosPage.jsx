import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AxiosPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [inputName, setInputName] = useState("");


   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("유저 데이터 불러오기 실패패", err));
  }, []);

 const handleSearch = () => {
    const user = users.find(u => u.name.toLowerCase() === inputName.toLowerCase());
    if (user) {
      console.log("유저 찾음:", user);
    } else {
      console.log(`입력값 유저 없음: ${inputName}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Axios Page</h1>
      <div className="space-x-2">
        <button onClick={() => navigate("/")}>Main Page</button>
        <button onClick={() => navigate("/useeffect")}>UseEffect Page</button>
      </div>

      {/* 미션 기능 추가 영역 */}
      <input
        type="text"
        placeholder="유저 이름 입력"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        유저 검색
      </button>
    </div>
  );
}
export default AxiosPage;