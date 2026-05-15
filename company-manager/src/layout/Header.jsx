import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ isSidebarOpen, toggleSidebar }) => {

  const location = useLocation();

  // Helper to determine if a link is currently active
  const isActive = (path) => {
    return location.pathname === path;
  };


  return (
    <header className="bg-white border-b sticky top-0 z-30 shadow-sm">
      <div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleSidebar(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">W</div>
            <span className="text-xl font-bold tracking-tight">Grid<span className="text-blue-600">Mart</span></span>
          </div>
        </div>

        {/* Center: Search Bar (Hidden on mobile) */}
        <div className="hidden sm:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              className="block w-full bg-gray-100 border-transparent rounded-lg py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="Search products..."
            />
          </div>
        </div>

        {/* Right side: Nav + Utilities */}
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium border-r pr-6 mr-2 border-gray-200">
            <Link to='/overview' className={`hover:text-blue-600 transition-colors ${isActive('/overview') ? 'text-blue-600' : 'text-gray-600'}`}>Shop</Link>
            <Link to='/documentation' className={`hover:text-blue-600 transition-colors ${isActive('/documentation') ? 'text-blue-600' : 'text-gray-600'}`}>Deals</Link>
            <Link to='/support' className={`hover:text-blue-600 transition-colors ${isActive('/support') ? 'text-blue-600' : 'text-gray-600'}`}>Track Order</Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">3</span>
            </button>

            {/* User Profile */}
            <button className="p-1 text-gray-600 hover:bg-gray-100 rounded-full transition-colors border-2 border-transparent hover:border-blue-100">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;