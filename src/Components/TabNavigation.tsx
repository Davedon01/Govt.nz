// import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavigation = () => {
  const tabs = [
    { name: 'Company Summary', path: '/companies/6049008' },
    { name: 'Addresses', path: '/companies/6049008/addresses' },
    { name: 'Directors (2)', path: '/companies/6049008/directors' },
    { name: 'Shareholdings (2)', path: '/companies/6049008/shareholdings' },
    { name: 'Documents (14)', path: '/companies/6049008/documents' },
    { name: 'PPSR Search', path: '/companies/6049008/ppsr-search' },
    { name: 'NZBN', path: '/companies/6049008/nzbn' },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-0">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }: { isActive: boolean }) =>
              `px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                isActive
                  ? 'bg-gray-700 text-white border-gray-700'
                  : 'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200 hover:text-gray-900'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
