import React, { useState } from 'react';
import { ChevronLeft, Search, Car as CarIcon, Navigation } from 'lucide-react';
import CarListItem from './CarListItem';
import BottomNavigation from './BottomNavigation';
import { carTypes } from '../data/fakeCars';

function MapPage({ setCurrentView, handleCarSelect, cars }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || car.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Позиции меток на карте
  const carMarkers = [
    { top: '25%', left: '35%', color: 'bg-emerald-600' },
    { top: '40%', left: '55%', color: 'bg-blue-600' },
    { top: '50%', left: '30%', color: 'bg-emerald-600' },
    { top: '65%', left: '60%', color: 'bg-purple-600' },
    { top: '35%', left: '70%', color: 'bg-emerald-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Map Area */}
      <div className="relative h-96 bg-gray-100 overflow-hidden">
        {/* Map Background with Streets */}
        <div className="absolute inset-0 bg-white">
          {/* Grid pattern for streets */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="#f3f4f6"/>
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Main roads */}
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#d1d5db" strokeWidth="8" />
            <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#d1d5db" strokeWidth="8" />
            <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#d1d5db" strokeWidth="8" />
            <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#d1d5db" strokeWidth="8" />
            
            {/* Parks/Green areas */}
            <circle cx="25%" cy="50%" r="40" fill="#d1fae5" opacity="0.5" />
            <circle cx="80%" cy="70%" r="35" fill="#d1fae5" opacity="0.5" />
            
            {/* Buildings */}
            <rect x="10%" y="10%" width="30" height="40" fill="#9ca3af" opacity="0.3" rx="2"/>
            <rect x="50%" y="15%" width="40" height="30" fill="#9ca3af" opacity="0.3" rx="2"/>
            <rect x="15%" y="70%" width="35" height="35" fill="#9ca3af" opacity="0.3" rx="2"/>
            <rect x="60%" y="40%" width="30" height="45" fill="#9ca3af" opacity="0.3" rx="2"/>
          </svg>

          {/* Car Markers */}
          {carMarkers.map((marker, i) => (
            <div
              key={i}
              className={`absolute ${marker.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer hover:scale-110 transition-transform`}
              style={{
                top: marker.top,
                left: marker.left,
                animationDelay: `${i * 0.3}s`,
                zIndex: 5
              }}
            >
              <CarIcon className="w-6 h-6" />
            </div>
          ))}

          {/* Price tags on some markers */}
          <div className="absolute bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold" style={{ top: '23%', left: '38%', zIndex: 6 }}>
            $100
          </div>
          <div className="absolute bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold" style={{ top: '38%', left: '58%', zIndex: 6 }}>
            $120
          </div>
          <div className="absolute bg-white px-3 py-1 rounded-full shadow-md text-sm font-semibold" style={{ top: '48%', left: '33%', zIndex: 6 }}>
            $90
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 left-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <button className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors">
          <Search className="w-5 h-5 text-emerald-600" />
        </button>

        {/* Location button */}
        <button className="absolute bottom-4 right-4 w-11 h-11 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-emerald-700 transition-colors">
          <Navigation className="w-5 h-5 text-white" />
        </button>

        {/* Map info */}
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg z-10">
          <p className="text-sm font-medium text-gray-700">Jakarta, Indonesia</p>
        </div>
      </div>

      {/* Nearby Car Options */}
      <div className="bg-white rounded-t-3xl -mt-8 relative z-10 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Nearby Car Options</h2>
          <button className="text-emerald-600 text-sm font-semibold">See All</button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search a Car Here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          />
        </div>

        {/* Car Type Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedType('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedType === 'All' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All
          </button>
          {carTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedType === type ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Car List */}
        <div className="space-y-4">
          {filteredCars.map((car) => (
            <CarListItem key={car.id} car={car} onClick={() => handleCarSelect(car)} />
          ))}
        </div>
      </div>

      <BottomNavigation currentView="map" setCurrentView={setCurrentView} />
    </div>
  );
}

export default MapPage;
