// import React from 'react';

const NZBN = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        <h2 className="text-xl font-medium text-gray-900 mb-6">NZBN Details</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700">NZBN:</span>
              <div className="text-gray-900 text-lg">9429042455684</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Entity Name:</span>
              <div className="text-gray-900">FORTIVIA CAPITAL</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Entity Type:</span>
              <div className="text-gray-900">NZ Limited Company</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Entity Status:</span>
              <div className="text-gray-900">Registered</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Registration Date:</span>
              <div className="text-gray-900">16 Sept 2014</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-medium text-gray-700">Trading Name(s):</span>
              <div className="text-gray-900">No trading name</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Phone Number(s):</span>
              <div className="text-gray-500 italic">Not provided</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Email Address(es):</span>
              <div className="text-gray-500 italic">Not provided</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Website(s):</span>
              <div className="text-gray-900">No website</div>
            </div>

            <div>
              <span className="font-medium text-gray-700">Industry Classification(s):</span>
              <div className="text-gray-500 italic">Not specified</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Physical Address</h3>
          <div className="bg-gray-50 p-4 rounded">
            <div className="font-medium text-gray-700">Registered Office</div>
            <div className="text-gray-900">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            The New Zealand Business Number (NZBN) is a unique identifier for businesses operating in New Zealand.
            It helps government agencies, customers, and suppliers identify and connect with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NZBN;
