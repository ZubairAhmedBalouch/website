"use client";
import pic from "../../../public/Hilux.jpg";
import pic2 from "../../../public/HR V.jpg";
import pic3 from "../../../public/civic.jpg";
import pic4 from "../../../public/lamborgane.webp";
import pic5 from "../../../public/toyotta.jpg";
import pic6 from "../../../public/car3.png"
import Image from "next/image";
import SmoothAnimatedSection from './animation';

const cardata = [
    { image: pic, heading: "Hilux Car", p: "Hilux Car Model 2024." },
    { image: pic2, heading: "HR-V", p: "HR-V Car Model 2024" },
    { image: pic3, heading: "Civic", p: "Civic Car Model 2024" },
    { image: pic4, heading: "Lamborgane", p: "Lamborgane Car Model 2024" },
    { image: pic5, heading: "Toyotta", p: "Toyotta Car Model 2024" },
    { image: pic6, heading: "Sports Car", p: "Sports Car XCN-356 Model 2024" },
];

const Cards = () => {
  return (
    <>
    <SmoothAnimatedSection>
      <h1 className="text-3xl md:text-[45px] font-bold font-serif  text-center bg-black text-blue-500 p-5">
        CAR MODELS
      </h1>

      <div id="shop" className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-white min-h-screen p-[40px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardata.map((card, index) => (
          <div
            key={index}
            className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 p-6 h-[400px] border-t-4 border-transparent hover:border-t-4 hover:border-blue-600 overflow-hidden relative"
          >
            <div className="relative w-full h-[200px] overflow-hidden rounded-md">
              <Image
                src={card.image}
                alt={card.heading}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800 text-center transition-colors duration-300 hover:text-blue-500">
              {card.heading}
            </h2>
            <p className="text-gray-600 text-sm text-center mt-2">{card.p}</p>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      </SmoothAnimatedSection>
    </>
  );
};

export default Cards;
