import { Link } from 'react-router-dom';
import img from '../../assets/NotFound/notFound.jpg'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={img} alt="Error" className="mb-8 max-w-sm w-full" />

      <h2 className="text-3xl font-bold mb-4 text-center">Oops! Something went wrong.</h2>

      <p className="text-lg text-gray-600 text-center">The page you're looking for might have been removed or doesn't exist.</p>
      <Link to ='/'> <p className='my-6 border-2 rounded-md px-4 py-2'>Go Back Home</p></Link>
    </div>
  );
};

export default ErrorPage;
