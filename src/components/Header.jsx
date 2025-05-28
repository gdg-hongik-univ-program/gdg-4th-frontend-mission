export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-orange-500 font-bold text-2xl">🥕 당근</div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded">
        앱 다운로드
      </button>
    </header>
  );
}
