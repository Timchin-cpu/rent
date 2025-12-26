import React, { useState } from 'react';
import { ChevronLeft, Search, Car as CarIcon } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Map Area */}
      <div className="relative h-96 bg-gradient-to-br from-emerald-100 via-blue-50 to-emerald-50">
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10">
          <Search className="w-5 h-5 text-emerald-600" />
        </button>

        {/* Fake Map Markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${30 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <CarIcon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nearby Car Options */}
      <div className="bg-white rounded-t-3xl -mt-8 relative z-10 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Nearby Car Options</h2>
          <button className="text-emerald-600 text-sm font-medium">See All</button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search a Car Here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        {/* Car Type Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedType('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedType === 'All' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            All
          </button>
          {carTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedType === type ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700'
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
