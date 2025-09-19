import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import CompanyHeader from './Components/CompanyHeader';
import TabNavigation from './Components/TabNavigation';
import CompanySummary from './Pages/CompanySummary';
import Addresses from './Pages/Addresses';
import Directors from './Pages/Directors';
import Shareholdings from './Pages/Shareholdings';
import Documents from './Pages/Documents';
import PPSRSearch from './Pages/PPSRSearch';
import NZBN from './Pages/NZBN';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main>
          <div className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <CompanyHeader />
              <TabNavigation />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Navigate to="/companies/6049008" replace />} />
              <Route path="/companies/6049008" element={<CompanySummary />} />
              <Route path="/companies/6049008/addresses" element={<Addresses />} />
              <Route path="/companies/6049008/directors" element={<Directors />} />
              <Route path="/companies/6049008/shareholdings" element={<Shareholdings />} />
              <Route path="/companies/6049008/documents" element={<Documents />} />
              <Route path="/companies/6049008/ppsr-search" element={<PPSRSearch />} />
              <Route path="/companies/6049008/nzbn" element={<NZBN />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
