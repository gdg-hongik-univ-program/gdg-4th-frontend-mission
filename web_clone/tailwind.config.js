// tailwind.config.js 예시 (색상 추가)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyscanner-primary': '#0077cc', // 스카이스캐너 블루 (예시)
        'skyscanner-secondary': '#00a698', // 스카이스캐너 그린/민트 (예시)
        'skyscanner-dark-blue': '#003b59', // 헤더/요약 바 배경
        'skyscanner-text': '#1a1a1a',
        'skyscanner-text-light': '#505050',
        'skyscanner-bg': '#f4f8f9',
        'skyscanner-surface': '#ffffff',
        'skyscanner-border': '#e0e0e0',
        'skyscanner-accent': '#ff7000', 
      },
      fontFamily: {
        // 스카이스캐너와 유사한 폰트 또는 선호하는 폰트
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}