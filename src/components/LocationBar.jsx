import { FiMapPin } from 'react-icons/fi'; // 설치 안 되어 있으면 나중에 설치: npm i react-icons

export default function LocationBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b text-lg font-semibold">
      <FiMapPin className="text-orange-500" />
      <span>상암동</span>
      <span className="text-gray-400 text-sm">▼</span>
    </div>
  );
}