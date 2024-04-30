
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';


const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        A Book review website
        <br></br>
        <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
          {" "}
          for book readers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Welcome to your go-to destination for book collections and discovery! Explore this tome of resources and community recommendations to find your next captivating read. Whether you're into epic fantasies, crime thrillers, or interstellar adventures, we've got you covered.
      </p>
      <div className="flex justify-center my-10">
      <Link
          to="/signup" 
          className="bg-gradient-to-r from-blue-500 to-purple-800 py-3 px-4 mx-3 rounded-md text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-900 transition-all duration-300 ease-in-out"
        >
          Start for free
        </Link>
        
      </div>
      <div>
        <Carousel />
        </div>
    </div>
  )};

  export default HomePage;