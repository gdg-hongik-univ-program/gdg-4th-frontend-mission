import React from 'react';

const locations = ['송도동', '역삼동', '물금읍', '상암동', '서교동', '중동', '화곡동'];

function SubLocations() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
      {locations.map((loc) => (
        <button
          key={loc}
          className="px-4 py-2 bg-gray-100 text-sm text-gray-800 rounded-full hover:bg-gray-200"
        >
          {loc}
        </button>
      ))}
    </div>
  );
}

export default SubLocations;
