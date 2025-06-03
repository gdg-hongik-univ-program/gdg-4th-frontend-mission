import React from 'react'

// src/components/PlayersNews.jsx
const PlayersNews = () => {
  // 예시 뉴스 데이터
  const newsList = [
    { id: 1, title: 'Mat Fraser Announces Retirement', date: 'May 20, 2025' },
    { id: 2, title: 'New Athletes Qualify for 2025 Games', date: 'May 15, 2025' },
    { id: 3, title: 'CrossFit Games Schedule Released', date: 'May 10, 2025' },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <ul className="space-y-4">
        {newsList.map(news => (
          <li key={news.id} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-sm text-gray-500">{news.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlayersNews;