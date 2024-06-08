
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import menImg from '../../../assets/CounterSection/boys.jpg';
// import girlImg from '../../../assets/CounterSection/girls.jpg';
// import coupleImg from '../../../assets/CounterSection/couple.jpg';
// import totalImg from '../../../assets/CounterSection/groom_bride.jpg';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

// const CounterSection = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: stats, isLoading } = useQuery({
//     queryKey: ['counter-section'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/counter-section');
//       return res.data;
//     },
//   });

//   const { data: marriageStats } = useQuery({
//     queryKey: ['counter-section1'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/success-stories');
//       return res.data;
//     },
//   });
    
//   // console.log(marriageStats);

//   if(isLoading){
//     return <p>Loading...</p>
//   }

//   return (
//     <div className='mb-10'>
//       <SectionTitle heading={'TrueBond Users Statistics'} />

//       {isLoading ? (
//         <section>
//           <div className="text-center p-4">Loading statistics...</div>
//         </section>
//       ) : stats ? (
//         <div className=" mx-auto mt-12  rounded-lg shadow-lg p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
//               <img className='w-48 h-48 rounded-full' src={totalImg} alt="" />
//               <h3 className="text-2xl font-semibold mb-2">Total Biodatas</h3>
//               <p className="text-6xl font-bold text-gray-800">{stats?.totalBiodata}</p>
//             </div>
//             <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
//               <img className='w-48 h-48 rounded-full' src={girlImg} alt="" />
//               <h3 className="text-2xl font-semibold mb-2">Girls Biodatas</h3>
//               <p className="text-6xl font-bold text-pink-500">{stats?.femaleBiodataCount}</p>
//             </div>
//             <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
//               <img className='w-48 h-48 rounded-full' src={menImg} alt="" />
//               <h3 className="text-2xl font-semibold mb-2">Boys Biodatas</h3>
//               <p className="text-6xl font-bold text-blue-500">{stats?.maleBiodataCount}</p>
//             </div>
//             <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-4 rounded-md flex flex-col justify-center items-center gap-4">
//               <img className='w-48 h-48 rounded-full' src={coupleImg} alt="" />
//               <h3 className="text-2xl font-semibold mb-2">Completed Marriages</h3>
//               <p className="text-6xl font-bold text-green-500">{marriageStats?.length}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center p-4">No statistics available yet.</div>
//       )}
//     </div>
//   );
// };

// export default CounterSection;







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

  const { data: marriageStats } = useQuery({
    queryKey: ['counter-section1'],
    queryFn: async () => {
      const res = await axiosSecure.get('/success-stories');
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='mb-10 px-4'>
      <SectionTitle heading={'TrueBond Users Statistics'} subHeading={"Our community at a glance"} />

      {isLoading ? (
        <section>
          <div className="text-center p-4">Loading statistics...</div>
        </section>
      ) : stats ? (
        <div className="mx-auto mt-12 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-6 rounded-md flex flex-col justify-center items-center gap-4 shadow-md">
              <img className='w-full h-48 object-cover rounded-md' src={totalImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Total Biodatas</h3>
              <p className="text-4xl font-bold text-gray-800">{stats?.totalBiodata}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-6 rounded-md flex flex-col justify-center items-center gap-4 shadow-md">
              <img className='w-full h-48 object-cover rounded-md' src={girlImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Girls Biodatas</h3>
              <p className="text-4xl font-bold text-pink-500">{stats?.femaleBiodataCount}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-6 rounded-md flex flex-col justify-center items-center gap-4 shadow-md">
              <img className='w-full h-48 object-cover rounded-md' src={menImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Boys Biodatas</h3>
              <p className="text-4xl font-bold text-blue-500">{stats?.maleBiodataCount}</p>
            </div>
            <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-6 rounded-md flex flex-col justify-center items-center gap-4 shadow-md">
              <img className='w-full h-48 object-cover rounded-md' src={coupleImg} alt="" />
              <h3 className="text-2xl font-semibold mb-2">Completed Marriages</h3>
              <p className="text-4xl font-bold text-green-500">{marriageStats?.length}</p>
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
