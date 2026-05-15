import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Companies from './pages/Companies';
import Employees from './pages/Employees';
import Settings from './pages/Settings';
import Overview from './pages/Overview';
import Documentation from './pages/Documentation';
import Support from './pages/Support';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<div>Select a menu item to begin.</div>} />
            </Routes>
          </div>
        </main>
      </div>

      <Footer title={"WokGrid"} />
    </div>
  );
}

export default App;