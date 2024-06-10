
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import '@smastrom/react-rating/style.css';

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get('/success-stories');
      return res.data;
    }
  });

  if (isLoading) {
    return <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    </div>
  }

  return (
    <div className="">
      <SectionTitle heading={"What Our Clients Say"} subHeading={"Our clients' success stories and experiences"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-12">
        {
          reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="mb-8 p-8 border rounded-lg bg-pink-100 shadow-lg flex flex-col items-center">
                <img
                  src={review.coupleImageUrl}
                  alt={review.names}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold text-center mb-1">{review.names}</h3>
                <p className="text-gray-600 mb-2 text-center">{new Date(review.marriageDate).toLocaleDateString()}</p>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.reviewStar}
                  readOnly
                  className="mb-4"
                />
                <p className="text-gray-700 text-center md:w-1/2">{review.successStory}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default SuccessStory;
