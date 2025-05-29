import React, { useState } from 'react';
const SearchSummaryBar = ({ routeInfo, paxInfo, dateTabs }) => {
  const [activeIndex, setActiveIndex] = useState(dateTabs.findIndex(tab => tab.active));

  const handleDateTabClick = (index) => {
    setActiveIndex(index);
    // 실제로는 이 날짜로 검색 결과를 다시 불러오는 로직이 필요합니다.
    console.log(`${dateTabs[index].range} 선택됨`);
  };

  return (
    <section className="bg-skyscanner-dark-blue text-white py-4 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">{routeInfo}</h1>
            <p className="text-xs sm:text-sm opacity-80">{paxInfo}</p>
          </div>
          <button className="p-2 border border-white rounded-full hover:bg-white hover:text-skyscanner-dark-blue transition-colors">
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="flex items-center">
          <button className="p-2 text-xl hover:bg-white/10 rounded-full disabled:opacity-50">
            {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 15l-4-4 4-4" clipRule="evenodd"></path></svg>
          </button>
          <div className="flex-grow overflow-x-auto whitespace-nowrap scrollbar-hide mx-2">
            {/* scrollbar-hide는 tailwind.config.js에 플러그인 추가 필요 또는 커스텀 CSS */}
            {dateTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleDateTabClick(index)}
                className={`inline-block text-center px-3 py-2 mx-1 rounded-t-md border-b-4 transition-colors
                  ${index === activeIndex ? 'border-skyscanner-secondary bg-white/10' : 'border-transparent hover:border-white/50'}`}
              >
                <span className="block text-xs sm:text-sm">{tab.range}</span>
                <span className="block text-sm sm:text-base font-semibold">{tab.price}</span>
              </button>
            ))}
          </div>
          <button className="p-2 text-xl hover:bg-white/10 rounded-full disabled:opacity-50">
            {/* <FontAwesomeIcon icon={faChevronRight} /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSummaryBar;