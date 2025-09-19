import Map from "@/components/map/map";
import { useState } from "react";

function Emergency() {
  const [radius, setRadius] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRadiusChange = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setErrorMessage("Distance cannot be negative.");
    } else {
      setErrorMessage("");
    }
    setRadius(value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-b from-[#FF7A8B] to-[#FDCB82] py-10">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-white tracking-tight">
          Call 999 for Emergency 🚨
        </h1>
        <p className="text-xl text-white mt-4">
          Get immediate assistance and locate the nearest hospitals.
        </p>
      </header>

      <div className="w-full max-w-lg flex flex-col items-center gap-6 mt-10 px-4">
        <label className="text-2xl font-semibold text-white" htmlFor="radius">
          What’s the highest distance you can travel?
        </label>

        <div className="relative w-full">
          <input
            type="number"
            id="radius"
            name="radius"
            placeholder="Enter in km..."
            className="w-full h-12 rounded-xl border-2 border-white p-4 text-lg focus:outline-none focus:ring-4 focus:ring-[#FFC75F] text-black"
            value={radius}
            onChange={handleRadiusChange}
            aria-label="Distance you can travel in kilometers"
            aria-describedby="radius-help-text"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-white">km</span>
        </div>

        {errorMessage && (
          <p id="radius-help-text" className="text-red-300 text-sm mt-2">
            {errorMessage}
          </p>
        )}
      </div>

      <div className="w-full max-w-full flex flex-col items-center mt-8 px-4">
        <h2 className="text-3xl font-semibold text-white mb-6">Nearest Hospitals</h2>

        <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[630px] flex justify-center mt-8 p-4 bg-white rounded-lg shadow-lg">
          <Map radius={parseFloat(radius) * 1000} />
        </div>

        {radius && !errorMessage && !parseFloat(radius) && (
          <p className="text-gray-500 mt-4">
            Please enter a valid distance to view hospitals near you.
          </p>
        )}
      </div>

      <footer className="text-center text-white mt-12 text-lg">
        <p>Stay safe. Help is just a call away.</p>
      </footer>
    </div>
  );
}

export default Emergency;
