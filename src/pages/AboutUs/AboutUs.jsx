import img from '../../assets/aboutUs/about.jpg'


const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gradient-to-b from-pink-100 to-pink-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At TrueBond, our mission is to foster genuine connections that transcend boundaries. We are committed to creating a platform where individuals can find meaningful relationships built on trust, compatibility, and shared values. Our goal is to make the journey to finding a life partner a joyful and fulfilling experience.
            </p>
            <h3 className="text-3xl font-semibold text-gray-800 mt-12 lg:mt-0">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where technology bridges the gap between hearts, making it easier for people to discover love and companionship. TrueBond aspires to be the most trusted and innovative matrimony platform, continuously evolving to meet the diverse needs of our users and helping them build lasting bonds.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={img}
              alt="About Us Photo"
              className="w-full h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            TrueBond was founded with the belief that everyone deserves to find their perfect match. We combine advanced technology with a deep understanding of human relationships to offer a unique and personalized experience. Our dedicated team is passionate about guiding you through every step of your journey, ensuring that you feel supported and valued.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
