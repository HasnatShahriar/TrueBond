const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mt-20 mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{heading}</h2>
      <SubTitle text={subHeading} />
      <div className="w-20 h-1 bg-[#FF6F61] mx-auto mt-4 mb-6"></div>
    </div>
  );
};

const SubTitle = ({ text }) => {
  return (
    <p className="text-xl md:text-2xl lg:text-3xl text-gray-600">{text}</p>
  );
};

export default SectionTitle;
