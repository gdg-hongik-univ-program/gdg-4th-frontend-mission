import React from 'react';
import Header from './Components/Header.jsx';
import SearchSummaryBar from './Components/SearchSummaryBar.jsx';
import FiltersSidebar from './Components/FiltersSidebar.jsx';
import FlightResults from './Components/FlightResults.jsx';
import SidePromotions from './Components/SidePromotions.jsx';

function App() {
  // 실제 데이터는 API 호출 또는 props로 전달됩니다. 여기서는 간단한 예시.
  const flightData = [
    { id: 1, airlineLogo: 'https://logos.skyscnr.com/images/airlines/favicon/7J.png', airlineName: 'JEJU air', departureTime: '오전 7:10', departureAirport: 'ICN', arrivalTime: '오전 9:00', arrivalAirport: 'KIX', duration: '1시간 50분', stops: '직항', returnDepartureTime: '오후 4:30', returnDepartureAirport: 'KIX', returnArrivalTime: '오후 6:35', returnArrivalAirport: 'ICN', returnDuration: '2시간 05분', returnStops: '직항', price: 146900, badge: '추천순', deals: '총 10건 중 최저가' },
    { id: 2, airlineLogo: 'https://logos.skyscnr.com/images/airlines/favicon/RS.png', airlineName: 'AIR SEOUL', departureTime: '오후 3:20', departureAirport: 'ICN', arrivalTime: '오후 5:00', arrivalAirport: 'KIX', duration: '1시간 40분', stops: '직항', returnDepartureTime: '오후 4:15', returnDepartureAirport: 'KIX', returnArrivalTime: '오후 6:25', returnArrivalAirport: 'ICN', returnDuration: '2시간 10분', returnStops: '직항', price: 142000, deals: '총 8건 중 최저가' },
  ];

  const dateTabsData = [
    { range: '6월 23일 - 6월 29일', price: '₩16.8만' },
    { range: '6월 24일 - 6월 30일', price: '₩13.1만' },
    { range: '6월 25일 - 7월 1일', price: '₩12.3만' },
    { range: '6월 26일 - 7월 2일', price: '₩14.1만', active: true },
    { range: '6월 27일 - 7월 3일', price: '₩13.1만' },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchSummaryBar
        routeInfo="서울 (모두) - 오사카 (모두)"
        paxInfo="성인 1명, 일반석"
        dateTabs={dateTabsData}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow">
        <div className="lg:flex lg:space-x-6">
          <div className="lg:w-1/4 xl:w-1/5 mb-6 lg:mb-0">
            <FiltersSidebar />
          </div>
          <div className="lg:w-3/4 xl:w-4/5 flex space-x-6">
            <div className="w-full lg:w-2/3"> {/* 항공권 목록이 더 넓게 */}
              <FlightResults flights={flightData} />
            </div>
            <div className="hidden lg:block lg:w-1/3"> {/* 데스크탑에서만 보이는 프로모션 */}
              <SidePromotions />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-300 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Skyscanner Clone - React & Tailwind</p>
      </footer>
    </div>
  );
}
export default App;