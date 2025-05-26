import React from 'react';
import Navigation from "../Navigation";

function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 p-4">
      <Navigation />
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Main Page</h1>
        <p className="text-lg text-gray-700">메인 페이지입니다. 다른 페이지로 이동해 보세요!</p>
      </div>
    </div>
  );
}

export default MainPage;
