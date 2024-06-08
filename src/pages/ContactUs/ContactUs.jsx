const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-gradient-to-b from-pink-100 to-pink-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#FF6F61] mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4 text-center">
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
              <button type="submit" className="bg-[#FF6F61] text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> Road-13,Nikunja,Khilkhet,Dhaka</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +123 456 7890</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@truebondmatrimonial.com</p>
            <p className="text-gray-700 mb-2"><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#FF6F61] hover:text-pink-600 transition duration-300"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#" className="text-[#FF6F61] hover:text-pink-600 transition duration-300"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#" className="text-[#FF6F61] hover:text-pink-600 transition duration-300"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#" className="text-[#FF6F61] hover:text-pink-600 transition duration-300"><i className="fab fa-linkedin fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
