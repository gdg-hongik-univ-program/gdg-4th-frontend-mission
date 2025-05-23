// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Inter 폰트 추가
      },
      colors: {
        'brand-primary': { // 메인 브랜드 색상 (예: 파란색 계열)
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB',  // blue-600
        },
        'brand-secondary': { // 보조 브랜드 색상 (예: 녹색 계열)
          light: '#34D399', // emerald-400
          DEFAULT: '#10B981', // emerald-500
          dark: '#059669',  // emerald-600
        },
        'light-bg': '#F9FAFB',     // 매우 밝은 회색 (gray-50)
        'card-bg': '#FFFFFF',       // 카드 배경
        'text-main': '#1F2937',   
        'text-muted': '#6B7280',  
        'text-on-brand': '#FFFFFF', 
      },
      boxShadow: {
        'custom-lg': '0 10px 20px -5px rgba(0, 0, 0, 0.07), 0 4px 8px -6px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 8px 12px -8px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseValue: {
          '0%, 57%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards', // forwards로 마지막 상태 유지
        pulseValue: 'pulseValue 0.35s cubic-bezier(0.4, 0, 0.6, 1)',
      }
    },
  },
  plugins: [],
}