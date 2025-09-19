// import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#4eb2ce] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title */}
          <div className="flex items-center space-x-4">
            <img
              src="https://ext.same-assets.com/1723797448/1314560862.png"
              alt="New Zealand Companies Office"
              className="h-8"
            />
            <div className="text-sm font-medium">
              NEW ZEALAND<br />
              COMPANIES OFFICE
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-[#4eb2ce] transition-colors duration-200 text-sm font-medium">
              All Registers
            </button>
            <button className="px-4 py-2 bg-white text-[#4eb2ce] hover:bg-gray-100 transition-colors duration-200 text-sm font-medium flex items-center space-x-1">
              <span>Login</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-4 py-2 bg-white text-[#4eb2ce] hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
              Create
            </button>
            <div className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white rounded text-sm">
              <span className="font-bold">RealMe</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
