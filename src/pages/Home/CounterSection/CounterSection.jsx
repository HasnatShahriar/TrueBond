import { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CounterSection = () => {
  const [totalBiodatas, setTotalBiodatas] = useState(0);
  const [girlsBiodatas, setGirlsBiodatas] = useState(0);
  const [boysBiodatas, setBoysBiodatas] = useState(0);
  const [completedMarriages, setCompletedMarriages] = useState(0);

  // Simulated data - you can fetch real data from an API or database
  useEffect(() => {
    // Simulated data
    const total = 1000;
    const girls = 600;
    const boys = 400;
    const marriages = 300;

    // Update state
    setTotalBiodatas(total);
    setGirlsBiodatas(girls);
    setBoysBiodatas(boys);
    setCompletedMarriages(marriages);
  }, []);

  return (
    <div className='mb-10'>
      <SectionTitle heading={'TrueBond Users Statistics'}/>

      <section>
        <div className=" mx-auto mt-12 bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Total Biodatas</h3>
              <p className="text-3xl font-bold text-gray-800">{totalBiodatas}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Girls Biodatas</h3>
              <p className="text-3xl font-bold text-pink-500">{girlsBiodatas}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Boys Biodatas</h3>
              <p className="text-3xl font-bold text-blue-500">{boysBiodatas}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Completed Marriages</h3>
              <p className="text-3xl font-bold text-green-500">{completedMarriages}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterSection;
