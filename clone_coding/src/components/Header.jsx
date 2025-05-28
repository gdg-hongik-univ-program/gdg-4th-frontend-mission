import React from 'react';

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b">
      {/* 로고 */}
      <div className="text-orange-500 font-bold text-xl">
        당근
      </div>

      {/* 앱 다운로드 버튼 */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        앱 다운로드
      </button>
    </header>
  );
}

export default Header;
