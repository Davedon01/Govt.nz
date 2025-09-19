// import React from 'react';

const PPSRSearch = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">PPSR Search</h2>
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Personal Property Securities Register</h3>
          <p className="mt-1 text-sm text-gray-500">
            Search for security interests in personal property related to this company.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 bg-[#4eb2ce] text-white text-sm font-medium rounded hover:bg-[#3a9bb7] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search PPSR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPSRSearch;
