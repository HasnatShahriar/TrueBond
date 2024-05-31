
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../assets/banner/banner (1).jpg';
// import img2 from '../../../assets/banner/banner (2).jpg';
// import img3 from '../../../assets/banner/banner (3).jpg';
// import img4 from '../../../assets/banner/banner (4).jpg';
// import img5 from '../../../assets/banner/banner (5).jpg';
// import img6 from '../../../assets/banner/banner (6).jpg';


// const Banner = () => {
//   return (
//     <Carousel autoPlay={true} interval={5000}>
//       <div>
//         <img src={img1} alt="Slide 1" />
//       </div>
//       <div>
//         <img src={img2} alt="Slide 2" />
//       </div>
//       <div>
//         <img src={img3} alt="Slide 3" />
//       </div>
//       <div>
//         <img src={img4} alt="Slide 4" />
//       </div>
//       <div>
//         <img src={img5} alt="Slide 5" />
//       </div>
//       <div>
//         <img src={img6} alt="Slide 6" />
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;




import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/banner (1).jpg';
import img2 from '../../../assets/banner/banner (2).jpg';
import img3 from '../../../assets/banner/banner (3).jpg';
import img4 from '../../../assets/banner/banner (4).jpg';
import img5 from '../../../assets/banner/banner (5).jpg';
import img6 from '../../../assets/banner/banner (6).jpg';

const Banner = () => {
  return (
    <Carousel autoPlay={true} interval={2500} infiniteLoop={true} showThumbs={false} className="mb-20">
      <div>
        <img className="h-[500px]" src={img1} alt="Slide 1" />
      </div>
      <div>
        <img className="h-[500px]" src={img2} alt="Slide 2" />
      </div>
      <div>
        <img className="h-[500px]" src={img3} alt="Slide 3" />
      </div>
      <div>
        <img className="h-[500px]" src={img4} alt="Slide 4" />
      </div>
      <div>
        <img className="h-[500px]" src={img5} alt="Slide 5" />
      </div>
      <div>
        <img className="h-[500px]" src={img6} alt="Slide 6" />
      </div>
    </Carousel>
  );
};

export default Banner;
