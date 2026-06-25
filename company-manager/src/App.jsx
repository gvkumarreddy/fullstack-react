import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { AppProvider } from './context/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AppProvider>
      <div className="flex flex-col h-screen overflow-hidden bg-gray-50 text-gray-800">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />

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
    </AppProvider>
  );
}

export default App;