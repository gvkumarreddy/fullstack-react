import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { products, cartItems, productsLoading, addToCart, removeFromCart, updateQuantity, categories } = useAppContext();
  const { id: categoryId } = useParams();

  if (productsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const filteredProducts = categoryId
    ? products.filter(p => p.category.id === categoryId)
    : products;

  const currentCategory = categoryId ? categories.find(c => c.id === categoryId || c._id === categoryId) : null;
  const pageTitle = currentCategory ? currentCategory.name : 'Featured Products';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{pageTitle}</h1>
        <span className="text-sm font-medium text-gray-500 bg-white border px-3 py-1 rounded-full shadow-sm">
          {filteredProducts.length} Items Available
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
        {filteredProducts.map((product) => {
          const itemInCart = cartItems.find((item) => item.id === product.id);
          return (
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
                    {product.category.name}
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
                    <span className="text-xl font-black text-gray-900 tracking-tight">${product.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {!itemInCart ? (
                      /* Original Plus Button */
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white p-2.5 rounded-xl transition-all shadow-lg shadow-blue-100 active:scale-95 focus:ring-4 focus:ring-blue-50"
                        aria-label="Add to cart"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    ) : (
                      /* Quantity Selector - Appears after adding */
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white h-10">
                        <button 
                          onClick={() => itemInCart.quantity > 1 ? updateQuantity(product.id, -1) : removeFromCart(product)}
                          className="px-2 hover:bg-gray-100 text-gray-500 transition-colors border-r h-full"
                        >-</button>
                        <span className="px-3 text-sm font-bold text-gray-900">{itemInCart.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          className="px-2 hover:bg-gray-100 text-gray-500 transition-colors border-l h-full"
                        >+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    </div >
  );
};

export default Home;