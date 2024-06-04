import { Link, useNavigate } from "react-router-dom"
import img from '../../assets/SignUp/signUp.jpg'
import logo from '../../assets/logo/logo.png'
import { useContext, useState } from "react"

import toast from "react-hot-toast"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async"
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic"


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Registration = () => {

  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile, user, setUser, loading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // email & password 
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.photo.files[0];

    // reset error & success
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password must have at least 6 or more characters');
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {
      setRegisterError('Password must have at least one uppercase and one lowercase letter');
      return;
    }

    try {
      // Upload image to ImgBB
      const imageData = new FormData();
      imageData.append('image', imageFile);
      const imageResponse = await axiosPublic.post(image_hosting_api, imageData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      // Extract image URL from response
      const imageUrl = imageResponse.data.data.url;

      const result = await createUser(email, password);
      await updateUserProfile(name, imageUrl);
      // Optimistic UI Update
      setUser({ ...result?.user, photoURL: imageUrl, displayName: name });

      navigate('/');
      toast.success('Sign UP Successfully');
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };


  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const imageFile = form.photo.files[0];

  //   setRegisterError('');
  //   setSuccess('');

  //   if (password.length < 6) {
  //     setRegisterError('Password must have at least 6 or more characters');
  //     return;
  //   } else if (!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {
  //     setRegisterError('Password must have at least one uppercase and one lowercase letter');
  //     return;
  //   }

  //   try {
  //     // Upload image to ImgBB (assuming the logic is correct)
  //     const imageData = new FormData();
  //     imageData.append('image', imageFile);
  //     const imageResponse = await axiosPublic.post(image_hosting_api, imageData, {
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     });

  //     // Extract image URL from response
  //     const imageUrl = imageResponse.data.data.url;

  //     // Call createUser from AuthContext to create the user
  //     const result = await createUser(email, password);

  //     // Update user profile with name and image URL
  //     await updateUserProfile(name, imageUrl);

  //     // Optimistic UI Update (assuming this is the desired behavior)
  //     setUser({ ...result?.user, photoURL: imageUrl, displayName: name }); // Call setUser from AuthContext

  //     navigate('/');
  //     toast.success('Sign UP Successfully');
  //   } catch (err) {
  //     console.log(err);
  //     toast.error(err?.message);
  //   }
  // };
  

  // handle google sign

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        toast.success('User signUp + login successfully')
        navigate(location?.state ? location?.state : '/')
      })
  }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <Helmet>
        <title>TasteTracker | Register</title>
      </Helmet>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-auto h-7 sm:h-8'
              src={logo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center font-bold text-gray-600 '>
            Please Register
          </p>
          <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>

            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Register with Google
            </span>
          </div>
          <form onSubmit={handleRegister}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='file'
              />
            </div>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
              />
            </div>

            <div className='mt-4 relative'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type={showPassword ? 'text' : 'password'}
              />
              <span className="absolute bottom-2 right-2 text-2xl" onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <IoMdEyeOff /> : <IoMdEye />
                }
              </span>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign Up
              </button>
            </div>
          </form>

          {
            registerError && <p className="text-red-600 ml-8">{registerError}</p>
          }
          {
            success && <p className="text-green-500 ml-8">{success}</p>
          }

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/login'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign in
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
        </div>
        <div
          className='hidden bg-cover bg-center lg:block lg:w-1/2'
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Registration
