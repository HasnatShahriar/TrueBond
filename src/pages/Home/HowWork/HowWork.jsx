import { FaRing, FaUser } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaSearch } from "react-icons/fa";

const HowWork = () => {
  return (
    <div>
      <SectionTitle heading={"How TrueBond Works"} subHeading={"Discover the easy steps to find your perfect match"} />

      <section className="flex flex-col justify-center items-center lg:flex-row gap-4">
        <div className="max-w-xs p-6 flex flex-col gap-6 items-center rounded-md shadow-md bg-gradient-to-b from-pink-100 to-pink-50 text-gray-800">
          <FaUser className="text-7xl text-pink-300" />
          <div className="mt-6 mb-2">
            <h2 className="text-3xl font-bold tracking-wide">Create Biodata</h2>
          </div>
          <p className="text-center text-gray-800">In a few simple steps, you can easily and entirely free of cost generate a biodata on TrueBond.</p>
        </div>
        <div className="max-w-xs p-6 flex flex-col gap-6 items-center rounded-md shadow-md bg-gradient-to-b from-pink-100 to-pink-50 text-gray-800">
          <FaSearch className="text-7xl text-pink-300" />
          <div className="mt-6 mb-2">
            <h2 className="text-3xl font-bold tracking-wide">Search Biodata</h2>
          </div>
          <p className="text-center text-gray-800">In a few simple steps, you can easily and entirely free of cost generate a biodata on TrueBond.</p>
        </div>
        <div className="max-w-xs p-6 flex flex-col gap-6 items-center rounded-md shadow-md bg-gradient-to-b from-pink-100 to-pink-50 text-gray-800">
          <FaUser className="text-7xl text-pink-300" />
          <div className="mt-6 mb-2">
            <h2 className="text-3xl font-bold tracking-wide">Contact Easily</h2>
          </div>
          <p className="text-center text-gray-800">If Someone likes your biodata or you like someone's biodata you can easily contact</p>
        </div>
        <div className="max-w-xs p-6 flex flex-col gap-6 items-center rounded-md shadow-md bg-gradient-to-b from-pink-100 to-pink-50 text-gray-800">
          <FaRing className="text-7xl text-pink-300" />
          <div className="mt-6 mb-2">
            <h2 className="text-3xl font-bold tracking-wide">Get Married</h2>
          </div>
          <p className="text-center text-gray-800">If you like the biodata and conversation.do your own inquiry & get married according your choice.</p>
        </div>
      </section>
    </div>
  );
};

export default HowWork;
