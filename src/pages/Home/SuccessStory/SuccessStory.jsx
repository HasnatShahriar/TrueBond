

import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SectionStoryCard from "./SectionStoryCard/SectionStoryCard";

const SuccessStory = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('./reviews.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const sortedData = data.sort((a,b)=> new Date(b.marriageDate) - new Date(a.marriageDate));
        setReviews(sortedData)
      })
  }, [])

  return (
    <div>
      <SectionTitle heading={"What Say Our Client"}/>
      {
        reviews.map(review => <SectionStoryCard key={review.id} review={review}/>)
      }
    </div>
  );
};

export default SuccessStory;