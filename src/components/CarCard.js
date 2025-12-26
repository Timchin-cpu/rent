import React from 'react';
import { MapPin, Package, Users, Zap } from 'lucide-react';

function CarCard({ car, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex gap-2 mb-3">
        {car.units <= 5 && (
          <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium">
            ⚠️ Last Unit
          </span>
        )}
        {car.discount > 0 && (
          <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-medium">
            🎉 {car.discount}% Discount
          </span>
        )}
      </div>

      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h3 className="font-bold text-gray-900 mb-2">{car.name}</h3>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Package className="w-3 h-3" />
          <span>{car.units} Units</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Users className="w-3 h-3" />
          <span>{car.seats} Seats</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Package className="w-3 h-3" />
          <span>{car.type}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Zap className="w-3 h-3" />
          <span>{car.fuel === 'Electric Car' ? 'Electric' : car.fuel}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>📊 {car.kilometers.toLocaleString()} km</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <MapPin className="w-3 h-3" />
          <span>{car.location}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <span>⭐ {car.rating}</span>
          <span>({car.reviews} Reviews)</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">
          ${car.price}
          <span className="text-sm text-gray-600">/Day</span>
        </span>
      </div>
    </div>
  );
}

export default CarCard;
