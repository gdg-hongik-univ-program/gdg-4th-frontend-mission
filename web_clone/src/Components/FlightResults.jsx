import React from 'react';
import FlightItem from './FlightItem.jsx';

const FlightResults = ({ flights }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-4 bg-skyscanner-surface p-3 rounded-lg shadow">
        <div>
          <button className="text-sm text-skyscanner-primary hover:underline mr-4">
            {/* 아이콘 */} 달력/차트 보기
          </button>
          <button className="text-sm text-skyscanner-primary hover:underline">
            {/* 아이콘 */} 가격 변동 알림 받기
          </button>
        </div>
        <div>
          <label htmlFor="sort-results" className="text-xs text-skyscanner-text-light mr-2">정렬 기준:</label>
          <select id="sort-results" className="text-sm border border-skyscanner-border rounded-md p-1.5 focus:ring-1 focus:ring-skyscanner-primary focus:border-skyscanner-primary">
            <option>추천순</option>
            <option>최저가순</option>
            <option>최단여행시간순</option>
          </select>
        </div>
      </div>

      {flights.length > 0 ? (
        flights.map(flight => <FlightItem key={flight.id} flight={flight} />)
      ) : (
        <div className="text-center py-10 bg-skyscanner-surface rounded-lg shadow">
          <p className="text-lg text-skyscanner-text-light">해당 조건에 맞는 항공권이 없습니다.</p>
        </div>
      )}
    </section>
  );
};

export default FlightResults;