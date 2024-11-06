'use client'
import Image from "next/image";
import teamImage from "../../../public/team.jpg"; 
import SmoothAnimatedSection from './animation';


const AboutUs = () => {
  return (
    <section id="about" className="about-us bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-white py-12">
    <SmoothAnimatedSection>
    <div className="container mx-auto px-1">
        {/* Section Heading */}
        <h2 className="text-center text-2xl  md:text-5xl font-bold mb-8 mt-10 text-blue-600 border rounded-md bg-black">
          About Us - Car Zone
        </h2>

        {/* About Us Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[50px]">
          {/* Left Side - Text and Info */}
          <div className="text-gray-100 md:text-left max-w-xl mx-auto md:mx-0 ">
            <p className="text-xl mb-4 text-justify">
              Welcome to Car Zone, where we provide top-notch automobiles to
              match every need. Whether you are looking for the latest models,
              luxury cars, or reliable used vehicles, we have got you covered. Our
              commitment to quality, customer satisfaction, and affordability is
              what drives us forward.
            </p>
            <p className="text-xl mb-4 text-justify">
              We take pride in offering a wide range of vehicles to our customers
              and ensuring that you have the best possible car-buying experience.
              Our team is dedicated to helping you find your dream car.
            </p>
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src={teamImage} 
              alt="Our Team"
              layout="responsive"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 underline text-gray-100">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value Cards */}
            <div className="value-card bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Customer Satisfaction
              </h4>
              <p>
                We prioritize your satisfaction above everything else, ensuring
                that you have the best experience buying or renting a car.
              </p>
            </div>

            <div className="value-card bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Quality Assurance
              </h4>
              <p>
                Our cars undergo strict quality checks to ensure they meet the
                highest standards before they reach you.
              </p>
            </div>

            <div className="value-card bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Trust and Integrity
              </h4>
              <p>
                We believe in transparency and honesty, and we strive to build
                trust with every customer.
              </p>
            </div>
          </div>
        </div>
      </div>
      </SmoothAnimatedSection>
    </section>
  );
};

export default AboutUs;
