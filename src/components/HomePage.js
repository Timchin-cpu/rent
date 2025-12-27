import React, { useEffect} from 'react';
import { MapPin, Calendar, Car as CarIcon } from 'lucide-react';
import CarCard from './CarCard';
import BottomNavigation from './BottomNavigation';

function HomePage({
  pickupLocation,
  setPickupLocation,
  dropoffLocation,
  setDropoffLocation,
  selectedDate,
  sameLocation,
  setSameLocation,
  setCurrentView,
  handleCarSelect,
  cars
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <CarIcon className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="text-xl">🔔</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Search For a Car 🚗</h1>
        <p className="text-gray-600 text-sm mb-6">Find your favorite car to rent</p>

        {/* Search Form */}
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-gray-700 font-medium">Pick-Up Location</span>
              </div>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full mt-1 text-sm text-gray-600 bg-transparent outline-none"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700 font-medium">Drop-Off Location</span>
              </div>
              <input
                type="text"
                value={sameLocation ? 'Same as Pick-Up' : dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                disabled={sameLocation}
                className="w-full mt-1 text-sm text-gray-600 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-900">{selectedDate}</span>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={sameLocation}
                onChange={(e) => setSameLocation(e.target.checked)}
                className="w-5 h-5 rounded accent-emerald-600"
              />
            </label>
          </div>

          <div className="flex gap-2 text-xs text-gray-600">
            <span>Same as Pick-Up Location</span>
            <button
              onClick={() => setSameLocation(!sameLocation)}
              className="text-emerald-600 font-medium ml-auto"
            >
              Change
            </button>
          </div>

          <button
            onClick={() => setCurrentView('map')}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Recommended Cars */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Recommended Car</h2>
          <button className="text-emerald-600 text-sm font-medium">See All</button>
        </div>

        <div className="space-y-4">
          {cars.slice(0, 3).map((car) => (
            <CarCard key={car.id} car={car} onClick={() => handleCarSelect(car)} />
          ))}
        </div>
      </div>

      <BottomNavigation currentView="home" setCurrentView={setCurrentView} />
    </div>
  );
}

export default HomePage;
