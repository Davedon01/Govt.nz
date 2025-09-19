// import React from 'react';

const Directors = () => {
  const directors = [
    {
      name: 'Victoria Margaret GILLESPIE',
      address: '25 Karaka Street, Newton, Auckland 1010, New Zealand',
      appointmentDate: '16 Sept 2014',
      shareholder: true,
      consentFormUrl: '#'
    },
    {
      name: 'Neil Grant GILLESPIE',
      address: '25 Karaka Street, Newton, Auckland 1010, New Zealand',
      appointmentDate: '16 Sept 2014',
      shareholder: true,
      consentFormUrl: '#'
    }
  ];

  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        <div className="space-y-8">
          {directors.map((director) => (
            <div key={director.name} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="font-medium text-gray-700 mb-1">Full legal name:</div>
                  <div className="text-gray-900 mb-3">{director.name}</div>

                  <div className="font-medium text-gray-700 mb-1">Residential Address:</div>
                  <div className="text-gray-900 mb-3">{director.address}</div>

                  <div className="font-medium text-gray-700 mb-1">Appointment Date:</div>
                  <div className="text-gray-900 mb-3">{director.appointmentDate}</div>
                </div>

                <div>
                  <div className="font-medium text-gray-700 mb-1">Shareholder:</div>
                  <div className="mb-3">
                    <a
                      href="/companies/6049008/shareholdings"
                      className="text-[#4eb2ce] underline hover:no-underline"
                    >
                      {director.shareholder ? 'Yes' : 'No'}
                    </a>
                  </div>

                  <div className="font-medium text-gray-700 mb-1">Consent:</div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#4eb2ce]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                    <a
                      href={director.consentFormUrl}
                      className="text-[#4eb2ce] underline hover:no-underline"
                    >
                      View Consent Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directors;
