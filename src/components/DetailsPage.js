import React, { useEffect} from 'react';
import { ChevronLeft, Plus, Zap, Users } from 'lucide-react';

function DetailsPage({ car, setCurrentView, handleBookNow }) {
  useEffect(() => {
  window.scrollTo(0, 0);
});
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentView('map')}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Car Details</h1>
        <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-xl">⋯</span>
        </button>
      </div>

      <div className="p-6">
        {/* Car Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-1">Brand</div>
            <div className="font-medium text-gray-900">{car.brand}</div>
          </div>
          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-1">Model</div>
            <div className="font-medium text-gray-900">{car.model}</div>
          </div>
          <div className="mb-3">
            <div className="text-sm text-gray-600 mb-1">Year</div>
            <div className="font-medium text-gray-900">{car.year}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Price</div>
            <div className="text-xl font-bold text-gray-900">${car.price} / Day</div>
          </div>
        </div>

        {/* Car Image */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Important Notice */}
        <div className="bg-emerald-50 rounded-2xl p-4 mb-4 flex gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">ⓘ</span>
          </div>
          <p className="text-sm text-gray-700">
            Before use the rental car, Please always check the conditions first before using it
          </p>
        </div>

        {/* Car Specifications */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-900">Car Specifications</h2>
            <button className="text-emerald-600 text-sm font-medium">Details</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Car Fuel</div>
                <div className="font-medium text-gray-900">{car.fuel}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Capacity</div>
                <div className="font-medium text-gray-900">{car.capacity}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Plans */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-gray-900">Rental Plan</h2>
            <button className="text-emerald-600 text-sm font-medium">See More</button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border-2 border-emerald-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">⏱</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Hourly Plan</div>
                  <div className="text-sm text-gray-600">${Math.round(car.price / 8)} / Hrs</div>
                </div>
              </div>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Plus className="w-5 h-5 text-emerald-600" />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 text-lg">📅</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Daily Plan</div>
                  <div className="text-sm text-gray-600">${car.price} / Day</div>
                </div>
              </div>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Plus className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 border-t border-gray-200">
        <button
          onClick={handleBookNow}
          className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
