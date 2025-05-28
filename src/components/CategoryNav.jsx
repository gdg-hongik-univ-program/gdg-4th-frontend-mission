const categories = [
  '중고거래', '알바', '부동산', '중고차', '동네업체', '동네생활', '모임'
];

export default function CategoryNav() {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 bg-gray-50">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="min-w-max px-4 py-2 rounded bg-white border hover:bg-gray-100 text-sm font-medium"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}