"use client";

import pic from "../../../public/contact.png";
import SmoothAnimatedSection from './animation';


const ContactSection = () => {
  return (
    <SmoothAnimatedSection>
    <section
       id="contact" className="bg-no-repeat bg-cover bg-center h-[600px] min-h-screen"
      style={{ backgroundImage: `url(${pic.src})` }} // Use pic.src for Next.js image optimization
    >
      <div className="h-screen bg-black/60">
        <div className="container grid grid-cols-1 md:grid-cols-2 h-full px-6 py-12 mx-auto">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-white px-4">
            <h1 className="text-2xl mt-[-50px] font-semibold capitalize lg:text-3xl text-red-500">
              Lets Get in Touch With US
            </h1>
            <p className="max-w-sm mt-1 text-center sm:auto px-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem quo aliquid molestiae hic incidunt beatae placeat
              accusantium!
            </p>
            <div className="mt-1 p-1 sm:mt-1 md:p-8">
              <h2 className="font-bold text-lg md:text-xl">Phone:</h2>
              <span className="block mb-5 text-gray-300 md:text-sm">
                (123) 456-7890
              </span>

              <h2 className="font-bold text-lg md:text-xl mt-1">Address:</h2>
              <span className="block mb-5 text-gray-300 md:text-sm">
                123 Main St, Anytown, USA
              </span>

              <h2 className="font-bold text-lg md:text-xl mt-1">Email:</h2>
              <span className="block text-gray-300 md:text-sm">
                XYZcompany123@gmail.com
              </span>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-300">Follow us</h3>
              <div className="flex mt-4 -mx-1.5">
                {/* Facebook Icon */}
                <a
                  className="mx-1 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.34 2H5.66C3.24 2 1.34 3.9 1.34 6.34v11.32C1.34 20.1 3.24 22 5.66 22h12.68c2.42 0 4.34-1.9 4.34-4.34V6.34C22 3.9 20.08 2 18.34 2zM14 20h-2v-6h-2v-2h2V8.75C12 5.81 13.67 4 15.82 4c1.23 0 2.33.09 2.65.13v2.96h-1.82c-1.41 0-1.68.67-1.68 1.66V12h2.83l-.5 2h-2.33v6z" />
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a
                  className="mx-1 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.29 4.29 0 001.88-2.37c-.84.5-1.77.86-2.76 1.05A4.23 4.23 0 0015.48 5c-2.35 0-4.25 1.9-4.25 4.25 0 .33.03.65.1.96-3.54-.18-6.69-1.87-8.8-4.44-.37.63-.58 1.36-.58 2.14 0 1.48.76 2.79 1.92 3.55-.71-.02-1.38-.22-1.96-.54v.05c0 2.05 1.46 3.76 3.4 4.15-.36.1-.74.15-1.14.15-.28 0-.56-.03-.83-.08.56 1.75 2.18 3.02 4.09 3.06A8.5 8.5 0 0110 17.5c-1.07 0-2.09-.12-3.09-.36a12.07 12.07 0 006.55 1.93c7.85 0 12.14-6.51 12.14-12.14 0-.18 0-.36-.01-.53A8.66 8.66 0 0022.46 6z" />
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a
                  className="mx-1 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.2c3.1 0 3.4.01 4.6.07 1.2.06 1.9.26 2.4.43.6.19 1.1.45 1.5.79.4.4.7.9.79 1.5.17.5.37 1.2.43 2.4.06 1.2.07 1.5.07 4.6s-.01 3.4-.07 4.6c-.06 1.2-.26 1.9-.43 2.4-.19.6-.45 1.1-.79 1.5-.4.4-.9.7-1.5.79-.5.17-1.2.37-2.4.43-1.2.06-1.5.07-4.6.07s-3.4-.01-4.6-.07c-1.2-.06-1.9-.26-2.4-.43-.6-.19-1.1-.45-1.5-.79-.4-.4-.7-.9-.79-1.5-.17-.5-.37-1.2-.43-2.4C2.2 15.4 2.2 15.1 2.2 12s.01-3.4.07-4.6c.06-1.2.26-1.9.43-2.4.19-.6.45-1.1.79-1.5.4-.4.9-.7 1.5-.79.5-.17 1.2-.37 2.4-.43C8.6 2.21 8.9 2.2 12 2.2zm0 1.5c-3.06 0-3.4.01-4.6.06-1.1.06-1.7.27-2.2.4-.4.13-.74.31-1.01.58-.27.27-.45.61-.58 1.01-.13.5-.34 1.1-.4 2.2-.05 1.2-.06 1.54-.06 4.6s.01 3.4.06 4.6c.06 1.1.27 1.7.4 2.2.13.4.31.74.58 1.01.27.27.61.45 1.01.58.5.13 1.1.34 2.2.4 1.2.05 1.54.06 4.6.06s3.4-.01 4.6-.06c1.1-.06 1.7-.27 2.2-.4.4-.13.74-.31 1.01-.58.27-.27.45-.61.58-1.01.13-.5.34-1.1.4-2.2.05-1.2.06-1.54.06-4.6s-.01-3.4-.06-4.6c-.06-1.1-.27-1.7-.4-2.2-.13-.4-.31-.74-.58-1.01-.27-.27-.61-.45-1.01-.58-.5-.13-1.1-.34-2.2-.4-1.2-.05-1.54-.06-4.6-.06zM12 6.5c-3 0-5.5 2.5-5.5 5.5S9 17.5 12 17.5 17.5 15 17.5 12 15 6.5 12 6.5zm0 1.5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm4-2c-.38 0-.73.15-1 0s-.15-.62 0-1c.38-.38.62-.38 1 0s.38.62 0 1z" />
                  </svg>
                </a>
                {/* YouTube Icon */}
                <a
                  className="mx-1 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="#"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.6 8.1c-.2-1.5-1.1-2.6-2.5-2.8-1.8-.2-3.6-.3-5.4-.3-1.8 0-3.6.1-5.4.3-1.4.2-2.3 1.3-2.5 2.8-.2 1.9-.3 3.8-.3 5.6s.1 3.7.3 5.6c.2 1.5 1.1 2.6 2.5 2.8 1.8.2 3.6.3 5.4.3 1.8 0 3.6-.1 5.4-.3 1.4-.2 2.3-1.3 2.5-2.8.2-1.9.3-3.7.3-5.6s-.1-3.7-.3-5.6zm-12.1 7.3V8.6l6.1 3.9-6.1 3.9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex mt-[100px] justify-center px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg px-6 mt-0 py-1 h-[400px] overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900">
              <h1 className="text-lg font-semibold text-center underline hove:underline-offset-4 text-blue-700 dark:text-red-200">
                Contact - Us
              </h1>
              <form className="mt-2 mb-0">
                <div className="flex-1 mb-2">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex-1 mb-2">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-24 px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-2 mt-5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SmoothAnimatedSection>
  );
};

export default ContactSection;
