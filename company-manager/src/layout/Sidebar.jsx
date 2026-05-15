import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  // Helper to determine if a link is currently active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Sidebar Overlay (Mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => toggleSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-4 overflow-y-auto">
          {/* Categories Section */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Categories</p>
            <nav className="space-y-1">
              <Link 
                to="/" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                All Products
              </Link>
              <Link 
                to="/electronics" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/electronics') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
                Electronics
              </Link>
              <Link 
                to="/furniture" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/furniture') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
                Furniture
              </Link>
              <Link 
                to="/fashion" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/fashion') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 00-3 0 2.704 2.704 0 01-3 0 2.703 2.703 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" /></svg>
                Fashion
              </Link>
            </nav>
          </div>

          {/* Price Filters Section */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Price Range</p>
            <div className="px-2 space-y-2">
              {[{ label: 'Under $50', id: 'p1' }, { label: '$50 to $100', id: 'p2' }, { label: '$100 to $500', id: 'p3' }, { label: 'Over $500', id: 'p4' }].map((range) => (
                <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Management Section (Admin Only) */}
          <div className="mt-auto pt-4 border-t">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Management</p>
            <nav className="space-y-1">
              <Link to="/companies" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/companies') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                Inventory
              </Link>
              <Link to="/settings" className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${isActive('/settings') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;