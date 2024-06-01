


const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sit amet fermentum quam. Sed ac lacinia velit. Sed vitae arcu
              varius, convallis purus ac, consectetur justo.
            </p>
          </div>
          <div className="md:w-1/2 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sit amet fermentum quam. Sed ac lacinia velit. Sed vitae arcu
              varius, convallis purus ac, consectetur justo.
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet fermentum quam. Sed ac lacinia velit. Sed vitae arcu
            varius, convallis purus ac, consectetur justo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
