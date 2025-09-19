// import React from 'react';

const CompanySummary = () => {
  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Company Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Company number:</span>
                <div className="text-gray-900">6049008</div>
              </div>
              <div>
                <span className="font-medium text-gray-700">NZBN:</span>
                <div className="text-gray-900">9429042455684</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Incorporation Date:</span>
                <div className="text-gray-900">11 Jul 2014</div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Company Status:</span>
                <div className="text-gray-900">Registered</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium text-gray-700">Entity type:</span>
                <div className="text-gray-900">NZ Limited Company</div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Constitution filed:</span>
                <div className="text-gray-900">No</div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div>
                <span className="font-medium text-gray-700">AR filing month:</span>
                <div className="text-gray-900">
                  April, last filed on{' '}
                  <a href="#" className="text-[#4eb2ce] underline hover:no-underline">
                    02 Apr 2025
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div>
                <span className="font-medium text-gray-700">Ultimate holding company:</span>
                <div className="text-gray-900">No</div>
              </div>
            </div>

            {/* Company addresses section */}
            <div className="border-t pt-4">
              <div className="mb-3">
                <a href="/companies/6049008/addresses" className="text-[#4eb2ce] underline hover:no-underline font-medium">
                  Company addresses:
                </a>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Registered Office</span>
                  <div className="text-gray-900">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
                </div>

                <div>
                  <span className="font-medium text-gray-700">Address for service</span>
                  <div className="text-gray-900">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
                </div>
              </div>

              <div className="mt-3">
                <a href="/companies/6049008/addresses" className="text-[#4eb2ce] underline hover:no-underline text-sm">
                  View all addresses
                </a>
              </div>
            </div>

            {/* Directors section */}
            <div className="border-t pt-4">
              <div className="mb-3">
                <a href="/companies/6049008/directors" className="text-[#4eb2ce] underline hover:no-underline font-medium">
                  Directors
                </a>
                <span className="text-gray-600 ml-2">Showing 2 of 2 directors</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="font-medium text-gray-900">Victoria Margaret GILLESPIE</div>
                  <div className="text-gray-700">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
                </div>

                <div>
                  <div className="font-medium text-gray-900">Neil Grant GILLESPIE</div>
                  <div className="text-gray-700">25 Karaka Street, Newton, Auckland 1010, New Zealand</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div>
                <span className="font-medium text-gray-700">Company record link:</span>
                <div className="text-gray-900">
                  <a href="https://fortiviacapital.com/legal" className="text-[#4eb2ce] underline hover:no-underline">
                    https://fortiviacapital.com/legal
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Additional NZBN Information */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <h3 className="font-medium text-blue-900 mb-3">Additional NZBN Information</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-blue-800">Trading Name(s):</span>
                  <div className="text-blue-700">No trading name</div>
                </div>

                <div>
                  <span className="font-medium text-blue-800">Phone Number(s):</span>
                  <div className="text-blue-700"></div>
                </div>

                <div>
                  <span className="font-medium text-blue-800">Email Address(es):</span>
                  <div className="text-blue-700"></div>
                </div>

                <div>
                  <span className="font-medium text-blue-800">Website(s):</span>
                  <div className="text-blue-700">No website</div>
                </div>

                <div>
                  <span className="font-medium text-blue-800">Industry Classification(s):</span>
                  <div className="text-blue-700"></div>
                </div>
              </div>

              <div className="mt-4">
                <a href="/companies/6049008/nzbn" className="text-[#4eb2ce] underline hover:no-underline text-sm">
                  View all NZBN details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySummary;
