import React, { useState } from 'react';
import HomePage from './components/HomePage';
import MapPage from './components/MapPage';
import DetailsPage from './components/DetailsPage';
import { fakeCars } from './data/fakeCars';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('Jakarta, Indonesia');
  const [dropoffLocation, setDropoffLocation] = useState('Same as Pick-Up Location');
  const [selectedDate, setSelectedDate] = useState('12 December 2024');
  const [sameLocation, setSameLocation] = useState(true);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setCurrentView('details');
  };

  const handleBookNow = () => {
    alert(`Booking ${selectedCar.name} for ${selectedDate}!\nPrice: $${selectedCar.price}/Day`);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {currentView === 'home' && (
        <HomePage
          pickupLocation={pickupLocation}
          setPickupLocation={setPickupLocation}
          dropoffLocation={dropoffLocation}
          setDropoffLocation={setDropoffLocation}
          selectedDate={selectedDate}
          sameLocation={sameLocation}
          setSameLocation={setSameLocation}
          setCurrentView={setCurrentView}
          handleCarSelect={handleCarSelect}
          cars={fakeCars}
        />
      )}

      {currentView === 'map' && (
        <MapPage
          setCurrentView={setCurrentView}
          handleCarSelect={handleCarSelect}
          cars={fakeCars}
        />
      )}

      {currentView === 'details' && selectedCar && (
        <DetailsPage
          car={selectedCar}
          setCurrentView={setCurrentView}
          handleBookNow={handleBookNow}
        />
      )}
    </div>
  );
}

export default App;
