import React from "react";
import products from "./ProductArray";
import { Link, useParams } from "react-router-dom";

const ShoppingCart = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Main Content */}
      <main className=" flex-grow bg-gray-100 p-10">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center sm:text-lg xs:text-sm">
            Shopping Cart{" "}
          </h1>
          {products
            .filter((product) => String(product.id) === String(id))
            .map((product, id) => (
              <div className="bg-white p-8 rounded-lg shadow-md md:p-16 ">
                <div className="flex items-center mb-6">
                  <div className="w-full flex justify-between items-center relative  sm:flex-col xs:flex-col ">
                    <div
                      key={id}
                      className="flex items-center sm:items-start xs:items-start "
                    >
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-48 h-48 object-cover rounded-lg mr-6 sm:w-24 sm:h-24 xs:w-24 xs:h-24"
                      />
                      <div className="flex flex-col ">
                        {" "}
                        <h2 className="text-xs md:text-xl font-semibold   ">
                          {product.name}
                        </h2>
                        <p className="text-xs text-gray-600  md:text-lg">
                          Qty:1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center sm:flex-col xs:flex-col Move  ">
                      <p className="text-lg font-semibold mt-2 sm:hidden xs:hidden">
                        {product.price}
                      </p>
                      <div className="flex items-center mt-2 ">
                        <button className="px-2 py-1 text-red-600 font-extrabold rounded-l">
                          -
                        </button>
                        <span className="text-xs md:text-lg px-1 md:px-4 md:py-1 bg-gray-100  ">
                          01
                        </span>
                        <button className="px-2 py-1 font-extrabold  text-red-600 rounded-r ">
                          +
                        </button>
                      </div>
                      <p className="text-lg font-semibold mt-2 sm:text-[10px] xs:text-[10px] sm:mt-0 xs:mt-0">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 sm:flex-col  sm:space-y-8 xs:flex-col xs:space-y-8">
                  <div>
                    <textarea
                      className="w-full p-2 bg-gray-100 rounded xs:mt-10"
                      placeholder="Add a Comment..."
                    ></textarea>
                  </div>
                  <Link
                    to="/"
                    className="text-black xs:text-sm hover:underline"
                  >
                    Continue Shopping
                  </Link>

                  <div className="flex flex-col items-center">
                    <p className="text-xl font-semibold mb-2 xs:text-sm">
                      Sub Total ₦80,000
                    </p>
                    <Link
                      to={`/checkoutDetails/${product.id}`}
                      className="bg-red-600 text-white px-6 py-2 rounded block text-center"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
