import React from 'react';
import { Users, Package, Zap } from 'lucide-react';

function CarListItem({ car, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-24 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex gap-2 mb-1">
          {car.available && (
            <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">
              ✓ Available
            </span>
          )}
          {car.discount > 0 && (
            <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-medium">
              {car.discount}% Discount
            </span>
          )}
        </div>
        <h3 className="font-bold text-gray-900 text-sm">{car.name}</h3>
        <p className="text-xs text-gray-600 mb-1">Co-friendly city driving best</p>
        <div className="flex gap-3 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> {car.seats} Seats
          </span>
          <span className="flex items-center gap-1">
            <Package className="w-3 h-3" /> {car.type}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3" /> {car.fuel === 'Electric Car' ? 'Electric' : car.fuel}
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default CarListItem;
