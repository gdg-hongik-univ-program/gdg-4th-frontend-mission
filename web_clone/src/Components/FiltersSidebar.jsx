import React from 'react';

const FilterGroup = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="text-sm font-semibold text-skyscanner-text-light uppercase mb-2">{title}</h4>
    {children}
  </div>
);

const FilterOption = ({ id, label, count, price, checked, disabled, onChange }) => (
  <label htmlFor={id} className={`flex items-center justify-between py-1.5 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}>
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 text-skyscanner-primary border-gray-300 rounded focus:ring-skyscanner-primary mr-2"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="text-sm text-skyscanner-text">{label}</span>
    </div>
    {price && <span className="text-xs text-skyscanner-text-light">{price}</span>}
    {count && <span className="text-xs text-skyscanner-text-light">{count}</span>}
  </label>
);


const FiltersSidebar = () => {
  // 실제 필터 상태는 useState 등으로 관리
  return (
    <aside className="bg-skyscanner-surface p-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-skyscanner-text">필터</h3>
        <button className="text-xs text-skyscanner-primary hover:underline">모두 지우기</button>
      </div>

      <FilterGroup title="경유">
        <FilterOption id="direct" label="직항" price="₩140,500부터" checked={true} />
        <FilterOption id="one-stop" label="1회 경유" price="₩317,579부터" />
        <FilterOption id="two-plus-stops" label="2번 이상 경유" count="없음" disabled={true} />
      </FilterGroup>

      <FilterGroup title="출발 시간대 설정">
        <div className="mb-3">
          <p className="text-xs font-medium text-skyscanner-text-light mb-1">가는날 출발시간</p>
          <p className="text-xs text-skyscanner-text-light">오전 12:00 - 오후 11:59</p>
          {/* 실제 슬라이더 구현은 react-slider 같은 라이브러리 사용 권장 */}
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-skyscanner-primary" />
        </div>
        <div>
          <p className="text-xs font-medium text-skyscanner-text-light mb-1">오는날 출발시간</p>
          <p className="text-xs text-skyscanner-text-light">오전 12:00 - 오후 11:59</p>
          <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-skyscanner-primary" />
        </div>
      </FilterGroup>

      {/* 추가 필터 그룹 (항공사, 공항 등) */}
      <FilterGroup title="항공사">
        <FilterOption id="jeju-air" label="제주항공" count="15" />
        <FilterOption id="air-seoul" label="에어서울" count="12" />
      </FilterGroup>
    </aside>
  );
};

export default FiltersSidebar;