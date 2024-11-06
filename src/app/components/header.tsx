"use client"
import Link from 'next/link';
import pic from '../../../public/carhd.png';
import logo from '../../../public/logo-light.png';
import pic1 from '../../../public/slide1.jpg';
import Image from 'next/image';
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // State for managing mobile menu visibility

    return (
        <header className="bg-no-repeat bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${pic1.src})` }}>
            <nav className="relative">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={180}
                                height={180}
                                className=""
                            />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                        <div className="flex flex-col md:flex-row md:mx-6">
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link className="my-2  px-3  py-2 text-xl text-gray-100 transition-colors duration-300 transform tracking-wider rounded-lg hover:bg-red-500  md:mx-4 md:my-0" href="./">Home</Link>
                            <Link className="my-2 px-3  py-2 text-xl text-gray-100 transition-colors duration-300 transform dark:text-gray-200 tracking-wider rounded-lg hover:bg-red-500  md:mx-4 md:my-0" href="#shop">Shop</Link>
                            <a className="my-2 px-3  py-2 text-xl text-gray-100 transition-colors duration-300 transform dark:text-gray-200 tracking-wider rounded-lg hover:bg-red-500  md:mx-4 md:my-0" href="#contact">Contact</a>
                            <a className="my-2 px-3  py-2 text-xl text-gray-100 transition-colors duration-300 transform dark:text-gray-200   tracking-wider rounded-lg hover:bg-red-500 md:mx-4 md:my-0" href="#about">About</a>
                        </div>
                        </div>
                        <button className='px-1 py-1 text-white text-xl tracking-wider  transition-colors  rounded-lg  hover:bg-blue-600'>Login</button>
                        <span className='text-white m-1 text-[26px]'>/</span>
                        <button className='px-1 py-1 text-white text-xl tracking-wider  transition-colors  rounded-lg  hover:bg-blue-600'>SignUp</button>

                        {/* <div className="flex justify-center md:block">
                            <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                                <svg className="w-5 h-5 bg-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </nav>

            <div className="container mx-auto pt-[250px] md:p-16 flex flex-col justify-center items-center h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start">
                        <div className="lg:max-w-lg lg:p-10">
                            <h1 className="text-3xl font-semibold text-white dark:text-white lg:text-4xl">
                                Best place to choose <br /> your <span className="text-red-600">Favorite Cars</span>
                            </h1>
                            <p className="mt-3 text-lg text-gray-200 italic dark:text-white lg:text-3xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
                            </p>
                            <button className="px-6 py-2 mt-4 mb-5 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-700 rounded-lg lg:w-auto hover:bg-red-500 :hover:border hover: focus:outline-none focus:bg-blue-600">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-3">
                        <Image
                            className="w-full h-auto"
                            src={pic}
                            alt="Catalogue"
                            height={800}
                            width={400}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
