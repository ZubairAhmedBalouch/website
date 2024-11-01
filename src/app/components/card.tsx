import pic from "../../../public/gratisography-cyber-kitty-800x525.jpg";
import pic2 from "../../../public/MainAfter.jpg";
import pic3 from "../../../public/ezgif-5-1573383f6b.gif";
import Image from 'next/image';

const carddata = [
    { image: pic, heading: "hello-world", p: "would you like to learn python", image1:pic2 },
    { image: pic2, heading: "faizan", p: "would you like to learn react" },
    { image: pic3, heading: "zubair", p: "would you like to learn next.js" },
    { image: pic2, heading: "zubair", p: "would you like to learn next.js" },
    { image: pic, heading: "zubair", p: "would you like to learn next.js" },
    { image: pic3, heading: "zubair", p: "would you like to learn next.js" },
];

const MyComponent = () => {
    return (
        <div id="shop" className="container px-6 py-16 mx-auto grid grid-cols-1 md:grid-cols-3  gap-6">
            {carddata.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <Image
                        src={card.image} // use the image from carddata
                        alt={card.heading}
                        className="w-full h-auto rounded-md"
                    />
                    <h2 className="mt-4 text-xl font-semibold font-serif text-center text-gray-800">{card.heading}</h2>
                    <p className="mt-2 text-gray-600">{card.p}</p>
                    <Image
                        src={card.image} // use the image from carddata
                        alt={card.heading}
                        className="w-[50px] h-[50px] rounded-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default MyComponent;
