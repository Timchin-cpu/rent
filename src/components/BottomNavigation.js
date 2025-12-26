import React from 'react';
import { Car as CarIcon } from 'lucide-react';

function BottomNavigation({ currentView, setCurrentView }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around max-w-md mx-auto">
      <button
        onClick={() => setCurrentView('home')}
        className={`flex flex-col items-center gap-1 ${
          currentView === 'home' ? 'text-emerald-600' : 'text-gray-400'
        }`}
      >
        {currentView === 'home' ? (
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🏠</span>
          </div>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-2xl">🏠</span>
          </div>
        )}
        <span className="text-xs font-medium">Home</span>
      </button>

      <button
        onClick={() => setCurrentView('map')}
        className={`flex flex-col items-center gap-1 ${
          currentView === 'map' ? 'text-emerald-600' : 'text-gray-400'
        }`}
      >
        {currentView === 'map' ? (
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <CarIcon className="w-6 h-6 text-white" />
          </div>
        ) : (
          <div className="w-10 h-10 flex items-center justify-center">
            <CarIcon className="w-6 h-6" />
          </div>
        )}
        <span className="text-xs font-medium">Car</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400">
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-2xl">📋</span>
        </div>
        <span className="text-xs">History</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-400">
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
}

export default BottomNavigation;
