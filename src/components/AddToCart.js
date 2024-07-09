import React from "react";

const AddToCart = () => {
  return (
    <div className="bg-red-600 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Cards */}
          {[
            "Music System Speaker",
            "Wireless Headphones",
            "Red Headphones",
            "Advanced Heart Rate Monitor",
            "Heart Rate Monitor",
            "Professional Skipping Rope",
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-semibold">{product}</h3>
                <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Cart Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex bg-white p-8 rounded-lg max-w-md w-full">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Item Secured! You're One Step Closer to Checkout
            </h2>
            <div className="flex items-center mb-4">
              <div className="w-24 h-24 bg-gray-300 mr-4"></div>
              <div>
                <h3 className="font-semibold">Music System Speaker</h3>
                <p>QTY: 1</p>
                <p>Total: ₦80,000</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4">You have just 1 item in your cart</p>
            <p className="font-bold mb-4">Total: ₦80,000.00</p>
            <div className="space-y-2">
              <button className="w-full border border-red-600 text-red-600 py-2 rounded">
                Continue Shopping
              </button>
              <button className="w-full border border-red-600 text-red-600 py-2 rounded">
                View Cart
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      //updated
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex bg-white p-8 rounded-lg max-w-md w-full">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Item Secured! You're One Step Closer to Checkout
            </h2>
            <div className="flex items-center mb-4">
              <div className="w-24 h-24 mr-4">{product.src}</div>
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p>QTY: 1</p>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-4">You have just 1 item in your cart</p>
            <p className="font-bold mb-4">Total: {product.price}</p>
            <div className="space-y-2">
              <button className="w-full border border-red-600 text-red-600 py-2 rounded">
                Continue Shopping
              </button>
              <button className="w-full border border-red-600 text-red-600 py-2 rounded">
                View Cart
              </button>
              <button className="w-full bg-red-600 text-white py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
