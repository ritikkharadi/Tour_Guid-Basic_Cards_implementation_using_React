// Tours.js
import Cards from './Cards';

function Tours({ tours, removeTour }) {
  return (
    <div className='flex flex-col align-middle'>
      <div className='flex justify-center'>
        <h2 className='text-3xl my-4 font-bold h-14 w-38'>Tour Guide</h2>
      </div>

      <div className='flex flex-wrap justify-around'>
        {tours.map((tour) => (
          <Cards key={tour.id} removeTour={removeTour} {...tour} className="w-1/4 mb-4" />
        ))}
      </div>
    </div>
  );
}

export default Tours;
