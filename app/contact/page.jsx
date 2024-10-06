import { Mail, Phone, MessageCircle, HelpCircle, MapPin } from "lucide-react";



const ContactPage = () => {
  return (
    <section className="w-full">
    
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            How can we assist you? Feel free to reach out using any of the methods below.
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <HelpCircle className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Help Center</h2>
            <p className="text-gray-600 mt-2">
              Browse through our FAQs or search for the topic you need help with.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <MessageCircle className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Message Us</h2>
            <p className="text-gray-600 mt-2">
              Chat with a support agent through our messaging service.
            </p>
          </div>

          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <MapPin className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Our Locations</h2>
            <p className="text-gray-600 mt-2">
              Find our office locations around the world.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-orange-500 focus:border-orange-500"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <Mail className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-600">ametht69@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="w-10 h-10 text-orange-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-600">+1 800-123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default ContactPage;
