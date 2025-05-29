import React from 'react';
// 로고 SVG를 직접 사용하거나, 이미지 파일 경로를 사용하세요.
// import SkyscannerLogo from '../assets/skyscanner_logo.svg'; // 예시

const Header = () => {
  return (
    <header className="bg-skyscanner-dark-blue text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <img className="h-8 w-auto" src={SkyscannerLogo} alt="Skyscanner" /> */}
            <a href="/" className="text-2xl font-bold text-white">Skyscanner</a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-gray-300 transition-colors">도움말</a>
            <button className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors">
              {/* 대한민국 국기 SVG 또는 이미지 */}
              <svg className="w-5 h-3 mr-1" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="12" rx="2" fill="#D9D9D9"/><circle cx="10" cy="6" r="2.5" fill="#CD2E3A"/><path d="M10 3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3H10Z" fill="#0047A0"/><path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9H10Z" fill="#0047A0" transform="rotate(-180 12 10)"/><rect x="1" y="1" width="5" height="2" fill="#CD2E3A"/><rect x="1" y="9" width="5" height="2" fill="#CD2E3A"/><rect x="14" y="1" width="5" height="2" fill="#0047A0"/><rect x="14" y="9" width="5" height="2" fill="#0047A0"/></svg>
              <span className="mr-1">한국어</span>·<span className="ml-1">₩ KRW</span>
            </button>
            <a href="#" className="px-4 py-2 bg-white text-skyscanner-primary text-sm font-semibold rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              로그인
            </a>
          </nav>
          <div className="md:hidden">
            {/* 모바일 메뉴 버튼 (햄버거) */}
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;