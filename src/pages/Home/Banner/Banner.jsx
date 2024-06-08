import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner/banner (1).jpg';
import img2 from '../../../assets/banner/banner (2).jpg';
import img3 from '../../../assets/banner/banner (3).jpg';
import img4 from '../../../assets/banner/banner (4).jpg';
import img5 from '../../../assets/banner/banner (5).jpg';
import img6 from '../../../assets/banner/banner (6).jpg';

const Banner = () => {
  return (
    <Carousel autoPlay={true} interval={4000} infiniteLoop={true} showThumbs={false} showStatus={true}>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img1} alt="Slide 1" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Find Your Perfect Partner</h2>
        </div>
      </div>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img2} alt="Slide 2" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Your Journey Starts Here</h2>
        </div>
      </div>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img3} alt="Slide 3" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Connecting Hearts</h2>
        </div>
      </div>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img4} alt="Slide 4" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Building Futures Together</h2>
        </div>
      </div>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img5} alt="Slide 5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Love Beyond Boundaries</h2>
        </div>
      </div>
      <div className="relative">
        <img className="h-[500px] w-full object-cover" src={img6} alt="Slide 6" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className='text-5xl font-bold text-white'>Embrace the Future</h2>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
