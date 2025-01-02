import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mt-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-200 mb-8 sm:mb-12 text-center">
        Welcome to my Tech Blog Website
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:px-16 lg:px-36 gap-8 sm:gap-12">
        <Image
          src="/me.png"
          alt="me"
          width={300}
          height={300}
          className="w-[200px] sm:w-[250px] md:w-[300px] h-[300px] rounded-full mb-8 md:mb-0"
        />
        <div className="my-4 px-6 sm:px-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-center mb-4 text-yellow-200 font-bold">
            Hello, I&apos;m Rabia Sohail
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-justify text-green-200 underline">
            Welcome to my tech blog! Stay updated with the latest trends, tutorials, and insights from the world of
            technology. Whether you're a beginner or a pro, there's something here for everyone passionate about tech
            innovation.
          </p>
          <button className="block mx-auto md:ml-auto md:mr-auto p-2 text-lg mt-6 text-yellow-200 w-[120px] sm:w-[150px] border-2 rounded-lg transition-all duration-300">
            <Link href="/myblogs">Let's Go</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
