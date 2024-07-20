// App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import data from './data';
import Tours from './Tours';
import "./App.css";

const App = () => {
  const [tours, setTours] = React.useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh flex justify-center items-center">
        <div className="flex flex-col">
          <h2 className="text-lg">No Tour Left</h2>
          <button
            className="border border-gray-400 rounded-md bg-red-300 text-base font-medium w-28 h-10"
            onClick={() => setTours(data)}
          >
            refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
      <ToastContainer />
    </div>
  );
};

export default App;
