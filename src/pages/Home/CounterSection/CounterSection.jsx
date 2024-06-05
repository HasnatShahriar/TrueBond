
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import menImg from '../../../assets/CounterSection/boys.jpg';
import girlImg from '../../../assets/CounterSection/girls.jpg';
import coupleImg from '../../../assets/CounterSection/couple.jpg';
import totalImg from '../../../assets/CounterSection/groom_bride.jpg';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CounterSection = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['counter-section'],
    queryFn: async () => {
      const res = await axiosSecure.get('/counter-section');
      return res.data;
    },
  });

  return (
    <div className='mb-10'>
      <SectionTitle heading={'TrueBond Users Statistics'} />

      {isLoading ? (
        <section>
          <div className="text-center p-4">Loading statistics...</div>
        </section>
      ) : stats ? (
        <div className=" mx-auto mt-12  rounded-lg shadow-lg p-6">
          {/* Your existing counter content using stats.totalBiodata, etc. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={totalImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Total Biodatas</h3>
              <p className="text-6xl font-bold text-gray-800">{stats.totalBiodata}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={girlImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Girls Biodatas</h3>
              <p className="text-6xl font-bold text-pink-500">{stats.femaleBiodataCount}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={menImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Boys Biodatas</h3>
              <p className="text-6xl font-bold text-blue-500">{stats.maleBiodataCount}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
              <img className='w-48 h-48 rounded-full' src={coupleImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Completed Marriages</h3>
              <p className="text-6xl font-bold text-green-500">-------</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-4">No statistics available yet.</div>
      )}
    </div>
  );
};

export default CounterSection;
