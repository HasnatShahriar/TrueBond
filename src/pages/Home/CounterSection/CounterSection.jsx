import { useState, useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import menImg from '../../../assets/CounterSection/boys.jpg'
import girlImg from '../../../assets/CounterSection/girls.jpg'
import coupleImg from '../../../assets/CounterSection/couple.jpg'
import totalImg from '../../../assets/CounterSection/groom_bride.jpg'

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
        <div className=" mx-auto mt-12  rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={totalImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Total Biodatas</h3>
              <p className="text-6xl font-bold text-gray-800">{totalBiodatas}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={girlImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Girls Biodatas</h3>
              <p className="text-6xl font-bold text-pink-500">{girlsBiodatas}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={menImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Boys Biodatas</h3>
              <p className="text-6xl font-bold text-blue-500">{boysBiodatas}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={coupleImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Completed Marriages</h3>
              <p className="text-6xl font-bold text-green-500">{completedMarriages}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterSection;
