import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function LocationSelector() {
  const [location, setLocation] = useState("상암동");

  return (
    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
      <span className="text-sm font-medium">📍 {location}</span>
      <ChevronDown className="w-4 h-4 text-gray-600" />
    </div>
  );
}

export default LocationSelector;
