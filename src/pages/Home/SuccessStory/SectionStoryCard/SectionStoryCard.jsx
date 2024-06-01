import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';



const SectionStoryCard = ({ review }) => {
  const { image, marriageDate, reviewStar, storyText, names } = review;
  return (
    <div className="mb-8 p-4 border rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={names} className="w-20 h-20 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{names}</h3>
          <p className="text-gray-600">{marriageDate}</p>
          {/* <p className="text-yellow-500">{reviewStar}</p>
           */}
          <Rating
            style={{ maxWidth: 180 }}
            value={reviewStar}
            readOnly
          />
        </div>
      </div>
      <p className="text-gray-700">{storyText}</p>
    </div>
  );
};

export default SectionStoryCard;