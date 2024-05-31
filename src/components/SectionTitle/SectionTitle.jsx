
// const SectionTitle = ({ heading, subHeading }) => {
//   return (
//     <div className="text-center md:w-1/3 mx-auto mt-8 mb-12">
//       <p className="text-green-600 mb-4 text-lg">--- {subHeading} ---</p>
//       <h3 className="text-3xl border-y-2 py-4 font-semibold uppercase">{heading}</h3>
//     </div>
//   );
// };

// export default SectionTitle;


const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center max-w-lg mx-auto mt-8 mb-12">
      <p className="text-gray-600 mb-2 text-sm uppercase tracking-wide">{subHeading}</p>
      <h3 className="text-4xl font-bold text-gray-900">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
