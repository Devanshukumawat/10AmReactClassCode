function Weather() {
  return (
    <div className="bg-body_image bg-cover bg-no-repeat h-screen flex justify-center items-center">
      <div className="w-3/5 h-4/5 bg-[#ffffff66] rounded-lg flex">
        {/* Left Panel */}
        <div className="w-1/2 bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between">
        {/* 1 */}
          <div className="flex justify-end m-4 ">
            <p className="font-bold text-2xl">
              Jaipur IN
            </p>
          </div>
        {/* 2 */}
          <div className="flex justify-between m-4">
            <div className="font-bold text-xl text-gray-200">
             <p>9898</p>
             <p>7676</p>
            </div>
            <div className="font-bold text-2xl text-gray-200">
             
             <p>34°C</p>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="h-full w-1/2">
          <div className="h-1/5 flex justify-center items-center border-b border-gray-300 m-4">
            {/* Search Input */}
          </div>

          <div className="flex border border-gray-200 rounded-lg w-3/5 mx-auto">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder-white px-2 py-1"
            />

            <span
              className="material-symbols-outlined text-xl cursor-pointer text-white bg-black 
               rounded-full p-1"
            >
              search
            </span>
          </div>
          
            <div className="text-center text-white font-semibold my-5">
              <p>
               
              </p>
              <p></p>
            </div>
          
          
            <>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Temp</p>
                <p>34°C</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Visibility</p>
                <p>5 Km</p>
              </div>
              <div className="flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2">
                <p>Wind Speed</p>
                <p>meter/sec</p>
              </div>
            </>
         
        </div>
      </div>
    </div>
  );
}

export default Weather;







