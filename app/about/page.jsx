import { Users, Heart, Globe, Target } from "lucide-react";


const AboutUs = () => {
  return (
    <section className="w-full">
    
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Welcome to Promptopia! We are passionate about helping people find the perfect home, whether they're looking to buy, rent, or sell. Our platform is designed to make real estate simple, accessible, and enjoyable.
          </p>
        </div>

        {/* Mission, Values, and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Our Mission */}
          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To simplify the real estate process and make it easy for everyone to find the right place to call home.
            </p>
          </div>

          {/* Our Values */}
          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Our Values</h2>
            <p className="text-gray-600 mt-2">
              Transparency, trust, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>

          {/* Our Vision */}
          <div className="border p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To create a global platform where real estate transactions are seamless and stress-free.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
              <p className="text-gray-500 mt-4">John is passionate about revolutionizing real estate and leading the vision behind Promptopia.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">COO & Co-Founder</p>
              <p className="text-gray-500 mt-4">Jane brings years of experience in operations to streamline our processes and ensure customer satisfaction.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold">David Lee</h3>
              <p className="text-gray-600">Head of Technology</p>
              <p className="text-gray-500 mt-4">David leads the tech team in building a seamless platform that makes real estate transactions easier than ever.</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold">Join Us on Our Journey</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            At Promptopia, we're constantly innovating to provide the best possible real estate experience for our users. Whether you're looking to rent, buy, or sell, we're here to help every step of the way.
          </p>
        </div>
      </div>
    
    </section>
  );
};

export default AboutUs;
