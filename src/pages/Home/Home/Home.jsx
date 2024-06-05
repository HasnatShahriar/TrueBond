import Banner from "../Banner/Banner";
import CounterSection from "../CounterSection/CounterSection";
import HowWork from "../HowWork/HowWork";
import PremiumBiodata from "../PremiumBiodata/PremiumBiodata";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner/>
      <PremiumBiodata/>
      <HowWork/>
      <CounterSection/>
      <SuccessStory/>
    </div>
  );
};

export default Home;