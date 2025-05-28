import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border rounded-full w-full max-w-xl shadow-sm bg-white">
      <button className="flex items-center gap-1 text-gray-700 text-sm font-medium px-2 py-1 hover:bg-gray-100 rounded">
        중고거래
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="flex-1">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="w-full text-sm outline-none px-2"
        />
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
}

export default SearchBar;
