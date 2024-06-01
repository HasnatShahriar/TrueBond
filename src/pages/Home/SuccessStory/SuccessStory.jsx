

import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SectionStoryCard from "./SectionStoryCard/SectionStoryCard";

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";




const SuccessStory = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('./reviews.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const sortedData = data.sort((a, b) => new Date(b.marriageDate) - new Date(a.marriageDate));
        setReviews(sortedData)
      })
  }, [])

  return (
    <div className="my-20">
      <SectionTitle heading={"What Say Our Client"} />
      {/* {
        reviews.map(review => <SectionStoryCard key={review.id} review={review} />)
      } */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide
            key={review.id}
          >
            <div className="mb-8 p-4 border rounded-lg bg-pink-100 shadow-lg">
              <div className="flex flex-col justify-center items-center gap-10">
                <img src={review.image} alt={review.names} className="w-20 h-20 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{reviews.names}</h3>
                  <p className="text-gray-600">{review.marriageDate}</p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.reviewStar}
                    readOnly
                  />
                </div>
                <p className="text-gray-700">{review.storyText}</p>
              </div>
            </div>
          </SwiperSlide>)
        }

      </Swiper>
    </div>
  );
};

export default SuccessStory;