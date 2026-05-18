import React from 'react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
    description: "High-fidelity audio with active noise cancellation technology."
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 189.50,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Breathable mesh back and adjustable support for long work sessions."
  },
  {
    id: 3,
    name: "Minimalist Leather Watch",
    price: 120.00,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Handcrafted Italian leather strap with a timeless scratch-resistant face."
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Monitor heart rate, sleep quality, and daily step count automatically."
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 25.00,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Sustainably sourced, soft-touch cotton for everyday comfort."
  },
  {
    id: 6,
    name: "Modern Floor Lamp",
    price: 145.00,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Dimmable LED lighting with a sleek, space-saving design."
  },
  {
    id: 7,
    name: "Olden Watch",
    price: 145.00,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Dimmable LED lighting with a sleek, space-saving design."
  }
];

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Featured Products</h1>
        <span className="text-sm font-medium text-gray-500 bg-white border px-3 py-1 rounded-full shadow-sm">
          {products.length} Items Available
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-black text-blue-600 uppercase tracking-widest shadow-sm border border-blue-50">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 text-lg">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-1 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-tighter">Price</span>
                  <span className="text-xl font-black text-gray-900 tracking-tight">${product.price.toFixed(2)}</span>
                </div>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-100 active:scale-95 focus:ring-4 focus:ring-blue-50"
                  aria-label="Add to cart"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;