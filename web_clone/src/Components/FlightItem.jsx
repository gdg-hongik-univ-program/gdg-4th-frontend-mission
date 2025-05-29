import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as fasHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FlightItem = ({ flight }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <article className="bg-skyscanner-surface rounded-lg shadow-lg mb-4 overflow-hidden transition-shadow hover:shadow-xl">
      <div className="p-4 md:flex md:items-stretch">
        {/* 왼쪽: 항공사 및 비행 정보 */}
        <div className="md:w-2/3 md:pr-4">
          <div className="flex items-center mb-3">
            <img src={flight.airlineLogo} alt={flight.airlineName} className="h-6 w-6 mr-3" />
            <span className="text-sm text-skyscanner-text-light">{flight.airlineName}</span>
            {flight.badge && (
              <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                {flight.badge}
              </span>
            )}
          </div>

          <div className="space-y-3">
            {/* 가는 편 */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold text-skyscanner-text">{flight.departureTime}</span>
                <span className="text-sm text-skyscanner-text-light ml-1">{flight.departureAirport}</span>
              </div>
              <div className="flex-grow text-center px-2">
                <p className="text-xs text-skyscanner-text-light">{flight.duration}</p>
                <div className="relative w-full h-0.5 bg-gray-200 my-0.5">
                  <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                </div>
                <p className="text-xs font-semibold text-skyscanner-secondary">{flight.stops}</p>
              </div>
              <div>
                <span className="text-lg font-semibold text-skyscanner-text">{flight.arrivalTime}</span>
                <span className="text-sm text-skyscanner-text-light ml-1">{flight.arrivalAirport}</span>
              </div>
            </div>
            {/* 오는 편 */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold text-skyscanner-text">{flight.returnDepartureTime}</span>
                <span className="text-sm text-skyscanner-text-light ml-1">{flight.returnDepartureAirport}</span>
              </div>
              <div className="flex-grow text-center px-2">
                <p className="text-xs text-skyscanner-text-light">{flight.returnDuration}</p>
                <div className="relative w-full h-0.5 bg-gray-200 my-0.5">
                  <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full transform -translate-y-1/2"></div>
                </div>
                <p className="text-xs font-semibold text-skyscanner-secondary">{flight.returnStops}</p>
              </div>
              <div>
                <span className="text-lg font-semibold text-skyscanner-text">{flight.returnArrivalTime}</span>
                <span className="text-sm text-skyscanner-text-light ml-1">{flight.returnArrivalAirport}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 가격 및 선택 버튼 */}
        <div className="md:w-1/3 md:pl-4 md:border-l md:border-skyscanner-border mt-4 md:mt-0 flex flex-col items-end justify-between">
          <div> {/* 가격 및 딜 정보 정렬용 */}
            <p className="text-2xl font-bold text-skyscanner-accent text-right">₩{flight.price.toLocaleString()}</p>
            {flight.deals && <p className="text-xs text-skyscanner-text-light text-right mt-0.5">{flight.deals}</p>}
          </div>
          <button className="w-full mt-3 bg-skyscanner-primary hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md shadow-sm transition-colors duration-150 flex items-center justify-center">
            선택하기
            {/* <FontAwesomeIcon icon={faChevronRight} className="ml-2" /> */}
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-2 flex justify-end border-t border-skyscanner-border">
         <button onClick={() => setIsFavorite(!isFavorite)} className="text-gray-400 hover:text-red-500 transition-colors">
            {/* <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} size="lg" /> */}
            {isFavorite ? '❤️' : '🤍'}
          </button>
      </div>
    </article>
  );
};

export default FlightItem;