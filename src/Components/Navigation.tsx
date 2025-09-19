// import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-[#44b2cf] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="text-cyan-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">COMPANIES</div>
                <div className="text-sm">REGISTER</div>
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-sm font-medium">Registering</div>
              <div className="text-sm">a company</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Maintaining</div>
              <div className="text-sm">a company</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Online</div>
              <div className="text-sm">services</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">Help</div>
              <div className="text-sm">centre</div>
            </div>
            <button className="flex items-center space-x-2 text-sm">
              <span>Search</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome message */}
      <div className="bg-gray-100 text-black py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <span className="text-sm">Welcome <strong>Guest</strong></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
