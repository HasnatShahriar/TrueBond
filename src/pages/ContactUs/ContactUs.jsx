
const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gradient-to-b from-blue-400 to-blue-600 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              Have questions or feedback? Drop us a message and we'll get back to you as soon as possible.
            </p>
            <form className="w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +123 456 7890</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@truebondmatrimonial.com</p>
            <p className="text-gray-700 mb-2"><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
