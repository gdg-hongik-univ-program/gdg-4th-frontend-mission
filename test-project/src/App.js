// src/Counter.js
import React, { useState, useEffect, useCallback } from 'react';
import Button from './components/Button'; // Button 컴포넌트 import
import { PlusIcon, CheckCircleIcon, Cog8ToothIcon, ArrowPathIcon } from '@heroicons/react/24/solid'; // 아이콘 import

function Counter() {
  const [currentValue, setCurrentValue] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);
  const [isCurrentValuePulsing, setIsCurrentValuePulsing] = useState(false);
  const [isIncrementAmountPulsing, setIsIncrementAmountPulsing] = useState(false);
  const triggerPulse = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 350); 
  };

  const handleIncrementValue = useCallback(() => {
    setCurrentValue(prevValue => {
      triggerPulse(setIsCurrentValuePulsing);
      return prevValue + incrementAmount;
    });
  }, [incrementAmount]);

  const handleSetIncrement = useCallback((newAmount) => {
    setIncrementAmount(newAmount);
    triggerPulse(setIsIncrementAmountPulsing);
  }, []);

  const incrementOptions = [1, 5, 10, 50, 100];

  return (
    // 전체 배경: 부드러운 그라데이션
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 selection:bg-brand-primary-light selection:text-text-on-brand">
      {/* 메인 카드 */}
      <div className="bg-card-bg p-6 sm:p-10 rounded-2xl shadow-custom-xl w-full max-w-lg animate-fadeIn">
        {/* 헤더 */}
        <header className="mb-8 text-center">
          <Cog8ToothIcon className="w-14 h-14 text-brand-primary-DEFAULT mx-auto mb-3 animate-spin [animation-duration:5s]" /> {/* 아이콘 회전 애니메이션 */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            스마트 카운터
          </h1>
          <p className="text-text-muted mt-2.5 text-sm sm:text-base">
            원하는 만큼 값을 올리고 증가량을 조절하세요.
          </p>
        </header>

        {/* 값 표시 영역 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 text-center">
          {/* 현재 값 */}
          <div className="bg-sky-50/70 p-5 rounded-xl border border-sky-200/80">
            <p className="text-xs font-medium text-sky-700 uppercase tracking-wider mb-1.5">현재 값</p>
            <p
              className={`font-bold text-sky-600 text-5xl sm:text-6xl tracking-tighter ${isCurrentValuePulsing ? 'animate-pulseValue' : ''}`}
            >
              {currentValue}
            </p>
          </div>
          {/* 현재 증가량 */}
          <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200/80">
            <p className="text-xs font-medium text-emerald-700 uppercase tracking-wider mb-1.5">현재 증가량</p>
            <p
              className={`font-bold text-emerald-600 text-5xl sm:text-6xl tracking-tighter ${isIncrementAmountPulsing ? 'animate-pulseValue' : ''}`}
            >
              {incrementAmount}
            </p>
          </div>
        </div>

        {/* 값 증가 버튼 */}
        <div className="mb-10">
          <Button
            onClick={handleIncrementValue}
            className="w-full bg-brand-primary-DEFAULT hover:bg-brand-primary-dark text-text-on-brand text-lg py-3.5 shadow-lg hover:shadow-custom-lg transform hover:-translate-y-0.5 focus:ring-brand-primary-light focus:ring-offset-card-bg"
          >
            <PlusIcon className="w-6 h-6 mr-2.5" />
            값 증가
          </Button>
        </div>

        {/* 증가량 설정 */}
        <div>
          <h3 className="text-base font-semibold text-text-main mb-4 text-center flex items-center justify-center">
            <ArrowPathIcon className="w-5 h-5 mr-2 text-text-muted"/>
            증가량 설정
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {incrementOptions.map((option) => (
              <Button
                key={option}
                onClick={() => handleSetIncrement(option)}
                className={`
                  min-w-[60px] sm:min-w-[65px] text-sm sm:text-base py-2 px-3 sm:px-4
                  ${incrementAmount === option
                    ? 'bg-brand-secondary-DEFAULT text-text-on-brand ring-brand-secondary-light hover:bg-brand-secondary-dark focus:ring-offset-card-bg' // 활성화
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200 hover:text-text-main focus:ring-gray-300 focus:ring-offset-card-bg' // 비활성화
                  }
                `}
              >
                {incrementAmount === option && <CheckCircleIcon className="w-5 h-5 mr-1.5 -ml-1" />}
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="text-center mt-10 text-xs text-gray-500/90">
      </footer>
    </div>
  );
}
export default Counter;