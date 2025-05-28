import React from 'react';
import {
  ShoppingBag,
  Search,
  Home,
  Car,
  Building2,
  BookOpen,
  Users
} from 'lucide-react';

const categories = [
  { name: '중고거래', icon: <ShoppingBag className="w-5 h-5" /> },
  { name: '알바', icon: <Search className="w-5 h-5" /> },
  { name: '부동산', icon: <Home className="w-5 h-5" /> },
  { name: '중고차', icon: <Car className="w-5 h-5" /> },
  { name: '동네업체', icon: <Building2 className="w-5 h-5" /> },
  { name: '동네생활', icon: <BookOpen className="w-5 h-5" /> },
  { name: '모임', icon: <Users className="w-5 h-5" /> },
];

function CategoryList() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-6">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className="w-20 h-20 flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-sm hover:bg-gray-200"
        >
          <div>{cat.icon}</div>
          <span className="mt-1 text-sm">{cat.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryList;