import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FFBB80'];

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stats, isLoading: loading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  });

  if (loading) return <p>Loading...</p>;

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = [
    { name: 'Total Biodata', value: stats?.totalBiodata || 0 },
    { name: 'Male Biodata', value: stats?.maleBiodataCount || 0 },
    { name: 'Female Biodata', value: stats?.femaleBiodataCount || 0 },
    { name: 'Premium Biodata', value: stats?.premiumBiodataCount || 0 },
    { name: 'Total Revenue', value: stats?.revenue || 0 }
  ];

  return (
    <div className="p-4">
      <section className="my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg bg-blue-50 dark:bg-gray-800 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center p-2 align-middle rounded-lg bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-9 w-9 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2m4 0c0-1.1-.9-2-2-2s-2 .9-2 2m4 0c0 1.1-.9 2-2 2s-2-.9-2-2m4 0c0 1.1-.9 2-2 2s-2-.9-2-2m4 0c0 1.1-.9 2-2 2s-2-.9-2-2m-2-4v10m-4-10v10m4-6H8m0 0h8m-8 0h8" />
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-gray-800 dark:text-gray-100">{stats?.totalBiodata}</p>
              <p className="capitalize text-gray-600 dark:text-gray-400">Total Biodata</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg bg-green-50 dark:bg-gray-800 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center p-2 align-middle rounded-lg bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-9 w-9 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a7 7 0 01-14 0 7 7 0 0114 0zM14 10a3 3 0 11-6 0 3 3 0 016 0zm0 0v4m-6 4a3 3 0 01-3-3m0 0v-4m0 0a3 3 0 016 0m0 0a3 3 0 01-3 3m0 0v4m6-4v4m0 0a3 3 0 01-3 3m0 0v-4m0 0a3 3 0 00-3-3m0 0v4" />
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-gray-800 dark:text-gray-100">{stats?.maleBiodataCount}</p>
              <p className="capitalize text-gray-600 dark:text-gray-400">Male Biodata</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg bg-yellow-50 dark:bg-gray-800 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center p-2 align-middle rounded-lg bg-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-9 w-9 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a7 7 0 01-14 0 7 7 0 0114 0zM14 10a3 3 0 11-6 0 3 3 0 016 0zm0 0v4m-6 4a3 3 0 01-3-3m0 0v-4m0 0a3 3 0 016 0m0 0a3 3 0 01-3 3m0 0v4m6-4v4m0 0a3 3 0 01-3 3m0 0v-4m0 0a3 3 0 00-3-3m0 0v4" />
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-gray-800 dark:text-gray-100">{stats?.femaleBiodataCount}</p>
              <p className="capitalize text-gray-600 dark:text-gray-400">Female Biodata</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg bg-purple-50 dark:bg-gray-800 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center p-2 align-middle rounded-lg bg-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-9 w-9 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3a2 2 0 00-2 2v16a2 2 0 002 2h3a2 2 0 002-2v-4h4v4a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-gray-800 dark:text-gray-100">{stats?.premiumBiodataCount}</p>
              <p className="capitalize text-gray-600 dark:text-gray-400">Premium Biodata</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg bg-red-50 dark:bg-gray-800 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center p-2 align-middle rounded-lg bg-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-9 w-9 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.67 0-5-2.33-5-5s2.33-5 5-5 5 2.33 5 5-2.33 5-5 5z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-gray-800 dark:text-gray-100">$ {stats?.revenue}</p>
              <p className="capitalize text-gray-600 dark:text-gray-400">Total Revenue</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
