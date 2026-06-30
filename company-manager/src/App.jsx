import React, { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Employees from './pages/Employees';
import Settings from './pages/Settings';
import Overview from './pages/Overview';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import Checkout from './pages/Checkout';
import { AppProvider, useAppContext } from './context/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AppContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setPriceRanges } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync URL search params to AppContext state on initial load and on back/forward navigation
  useEffect(() => {
    const rangesFromUrl = searchParams.getAll('pricerange');
    setPriceRanges(rangesFromUrl);
  }, [searchParams, setPriceRanges]);

 

  // This function will be passed to the Sidebar to update the URL
  const handlePriceRangeChange = (priceRangeId) => {
    const currentRanges = searchParams.getAll('pricerange');
    const newRanges = currentRanges.includes(priceRangeId)
      ? currentRanges.filter(id => id !== priceRangeId)
      : [...currentRanges, priceRangeId];
    
    setSearchParams({ pricerange: newRanges });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 text-gray-800">
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={setIsSidebarOpen}
          handlePriceRangeChange={handlePriceRangeChange} 
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/support" element={<Support />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Checkout />} />
              <Route path="/category/:id" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer title={"WokGrid"} />
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

const App = () => {
  // App is wrapped by BrowserRouter in index.jsx
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;