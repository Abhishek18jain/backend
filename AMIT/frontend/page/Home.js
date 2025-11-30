import React from "react";
import { Link } from "react-router-dom";
import image from "../components/assets/image.png";
const Home = () => {
  return (
    <div className="min-h-screen bg-#000C1F flex flex-col items-center mt-10 p-4">
      
      {/* Main Title */}
<div className="text-center mb-16">
  <h1 className="text-4xl font-bold text-white mb-4">Fake News Detector</h1>

  <img 
    src={image} 
    alt="Fake News" 
    className="mx-auto mb-4 w-45 h-auto"
  />

  <p className="text-xl text-slate-300">Is it fake or real?</p>
</div>


      {/* Action Buttons */}
      <div className="max-w-md w-full space-y-6">
        {/* VERIFY TEXT Button */}
        <Link 
          to="/text-check" 
          className="block w-full py-5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-xl text-white text-xl font-bold text-center shadow-lg"
        >
          VERIFY TEXT
        </Link>
        
        {/* VERIFY IMAGE Button */}
        <Link 
          to="/image-check" 
          className="block w-full py-5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-xl text-white text-xl font-bold text-center shadow-lg"
        >
          VERIFY IMAGE
        </Link>
      </div>

    </div>
  );
};

export default Home;