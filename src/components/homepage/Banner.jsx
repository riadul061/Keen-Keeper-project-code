import React from 'react';
import { BsPlus } from 'react-icons/bs';

const Banner = () => {
    return (
    <div className="text-center py-16 px-4 bg-gray-50">
      
      <h1 className="text-3xl md:text-4xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the relationships that matter most.
      </p>

      <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
        + Add a Friend
      </button>
    </div>
  );
};
export default Banner;