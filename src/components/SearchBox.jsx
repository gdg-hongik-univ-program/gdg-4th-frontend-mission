export default function SearchBox() {
  return (
    <div className="flex gap-2 px-4 py-4">
      <select className="border rounded px-2 py-1 text-sm">
        <option>중고거래</option>
        <option>알바</option>
      </select>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="flex-grow border rounded px-3 py-1 text-sm"
      />
      <button className="bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600">
        검색
      </button>
    </div>
  );
}