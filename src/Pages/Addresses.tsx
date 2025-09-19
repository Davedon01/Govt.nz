// import React from 'react';

const Addresses = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        {/* Required addresses section */}
        <div className="mb-8">
          <h3 className="text-[#4eb2ce] text-lg font-medium mb-4">Required addresses</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-700">Registered office address:</div>
                <div className="text-gray-900">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-600">Valid NZ Address</span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-700">Address for service:</div>
                <div className="text-gray-900">11 Tawari Street, Mount Eden, Auckland, 1024, New Zealand</div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-green-600">Valid NZ Address</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Addresses section */}
        <div className="mb-8">
          <h3 className="text-[#4eb2ce] text-lg font-medium mb-4">Other Addresses</h3>

          <div>
            <div className="font-medium text-gray-700">Website:</div>
            <div className="text-gray-900">No website</div>
          </div>
        </div>

        {/* Historic data section */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <div className="flex items-center justify-between">
            <div>
              <a href="#" className="text-[#4eb2ce] underline hover:no-underline font-medium">
                Historic data for addresses
              </a>
            </div>
            <button className="flex items-center space-x-2 text-[#4eb2ce] hover:underline">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span>Show History</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
