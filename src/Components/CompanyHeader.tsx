// import React from 'react';

const CompanyHeader = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl text-[#4eb2ce] font-normal">
            Fortivia Capital <span className="text-gray-600">(6049008)</span> <span className="italic text-[#4eb2ce]">Registered</span>
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            To maintain this company{' '}
            <a href="#" className="text-[#4eb2ce] underline hover:no-underline">
              log on here
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-600 text-white text-sm hover:bg-gray-700 transition-colors">
              MY TOOLS
            </button>
            <button className="px-4 py-1 bg-[#4eb2ce] text-white text-sm hover:bg-[#3a9bb7] transition-colors">
              REQUEST AUTHORITY
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Last updated on<br />02 Apr 2025
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <button className="flex items-center space-x-1 text-[#4eb2ce] hover:underline text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
          </svg>
          <span>View as Single Page</span>
        </button>

        <button className="flex items-center space-x-1 text-[#4eb2ce] hover:underline text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
          </svg>
          <span>Certificate of Incorporation</span>
        </button>

        <button className="flex items-center space-x-1 text-[#4eb2ce] hover:underline text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
          </svg>
          <span>Company Extract</span>
        </button>

        <button className="flex items-center space-x-1 text-[#4eb2ce] hover:underline text-sm ml-auto">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span>Print</span>
        </button>
      </div>
    </div>
  );
};

export default CompanyHeader;
