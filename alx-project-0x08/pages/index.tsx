import React, { useState } from "react";


const Home: React.FC = () => {
  /**
   * Handles the generation of an image based on the user's input.
   * This function is triggered when the user clicks the "Generate Image" button.
   */
  const handleGenerateImage = async () => {
    // Log message to indicate the start of image generation
    console.log("Generating Images");

    // Add image generation logic here

  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-gray-400 font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Generate Image
          </button>
        </div>
      </div>
     </div>
  );
};

export default Home;