// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Shareholdings = () => {
  const shareholdings = [
    {
      allocation: 'Allocation 1',
      shares: 500,
      percentage: '50.00%',
      name: 'Victoria Margaret GILLESPIE',
      address: '25 Karaka Street, Newton, Auckland 1010, New Zealand',
      isDirector: true
    },
    {
      allocation: 'Allocation 2',
      shares: 500,
      percentage: '50.00%',
      name: 'Neil Grant GILLESPIE',
      address: '25 Karaka Street, Newton, Auckland 1010, New Zealand',
      isDirector: true
    }
  ];

  const chartData = {
    labels: ['Allocation 1 (50.00%)', 'Allocation 2 (50.00%)'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#374151', '#6B7280'],
        borderColor: ['#374151', '#6B7280'],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: { label: string; parsed: number }) => `${context.label}: ${context.parsed}%`
        }
      }
    },
  };

  return (
    <div className="bg-white border border-gray-300">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Shareholding Details */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-medium text-gray-700">Total Number of Shares:</span>
                <div className="text-gray-900">1000</div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Extensive Shareholding:</span>
                <div className="text-gray-900">No</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-4">Shareholders in Allocation:</h3>
            </div>

            <div className="space-y-6">
              {shareholdings.map((shareholding) => (
                <div key={shareholding.allocation} className="border border-gray-200 p-4 rounded">
                  <div className="mb-3">
                    <span className="text-[#4eb2ce] font-medium">
                      {shareholding.allocation}:
                    </span>
                    <span className="ml-2 font-medium">
                      {shareholding.shares} shares ({shareholding.percentage})
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium text-gray-900">{shareholding.name}</div>
                    <div className="text-gray-700">{shareholding.address}</div>
                    <div>
                      <span className="font-medium text-gray-700">Director: </span>
                      <a
                        href="/companies/6049008/directors"
                        className="text-[#4eb2ce] underline hover:no-underline"
                      >
                        {shareholding.isDirector ? 'Yes' : 'No'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Pie Chart */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-4 rounded border">
              <div className="h-64 mb-4 flex items-center justify-center">
                <div className="w-48 h-48">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-600 rounded" />
                  <span>Allocation 1 (50.00%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-500 rounded" />
                  <span>Allocation 2 (50.00%)</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Share allocations less than 1% are not displayed in the graph above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shareholdings;
