import React from "react";

const Header = ({isSidebarOpen, setIsSidebarOpen}) => {
    return (
        <header className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">W</div>
              <span className="text-xl font-bold tracking-tight">Wok<span className="text-blue-600">Grid</span></span>
            </div>
          </div>

          {/* Header Menus */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-blue-600 hover:text-blue-700">Overview</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
          </nav>
        </div>
      </header>
    );
};

export default Header;