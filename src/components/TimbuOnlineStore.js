import React, { useState } from "react";
import Headband from "../components/assets/Images/Group 1171275218.png";
import { MdAddShoppingCart } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import products from "./ProductArray";

const TimbuOnlineStore = () => {
  const [modalProduct, setModalProduct] = useState("");

  const showModal = (product) => setModalProduct(product);
  const closeModal = () => setModalProduct(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section
          className="py-12 px-24 "
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="container mx-auto space-x-8 flex xs:flex-col sm:flex-col md:flex-row  lg:flex-row items-center">
            <div className="md:w-1/2 ">
              <h1
                className="text-4xl font-bold mb-4 xs:text-center sm:text-center "
                style={{ color: "#4E2020" }}
              >
                Effortless Elegance.
                <br />
                Instant Gratification.
              </h1>
              <p
                className="mb-4 xs:text-center sm:text-center"
                style={{ color: "#EBADAD" }}
              >
                Seamless shopping for the discerning customer. Fast finds &
                instant gratification.
              </p>
              <button className="flex justify-center items-center text-black bg-red-100 mb-5 md:bg-red-600 md:text-white md:px-6 md:py-2 md:rounded  lg:bg-red-600 lg:text-white px-6 py-2 rounded  xs:w-full  sm:mx-auto  ">
                <span className="xs:text-black sm:text-black"> Shop Now</span>
                <span>
                  <GoArrowRight className="xs:text-black sm:text-black md:hidden lg:hidden" />
                </span>
              </button>
            </div>
            <div className=" md:w-1/2">
              <img
                src={Headband}
                alt="Featured Product"
                className="xs:mx-auto "
              />
            </div>
          </div>
        </section>

        <section className="py-12 text-center bg-custom-yellow">
          <div className="container mx-auto ">
            <h2 className="text-2xl font-bold  " style={{ color: "#4E2020" }}>
              Our Popular Products
            </h2>
            <p style={{ color: "#909090" }} className="">
              Explore Our Collection of Top-Rated Gadgets Designed to Enhance
              Your Productivity and Entertainment
            </p>

            <div className="relative w-1/3 mt-3 mb-5 mx-auto ">
              <input
                type="text"
                placeholder="Search for Products..."
                className="w-full p-2 pl-10 rounded"
              />
              <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </section>
        <div className="container py-4 mx-auto">
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {products.map((product, id) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="h-52 w-full mx-auto"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>

                  <button
                    className="mt-2 bg-red-100 text-black px-4 py-2 rounded flex items-center  mx-auto hover:bg-red-600 hover:text-white"
                    onClick={() => showModal(product)}
                  >
                    <span className="mr-3 hover:text-white">
                      <MdAddShoppingCart />
                    </span>
                    Add to Cart
                  </button>
                  {modalProduct && (
                    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                      <div className="flex bg-white p-14  max-w-4xl gap-8 sm:flex-col xs:flex-col xs:max-w-xs sm:max-w-sm sm:p-10 xs:p-10">
                        <div>
                          <h2 className="text-md font-bold mb-4 sm:mb-0 xs:mb-0">
                            Item Secured! You're One Step Closer to Checkout
                          </h2>
                          <div className="flex justify-between mb-4 ">
                            <div className="flex items-center">
                              <img
                                className="w-40 h-44  md:w-20 md:h-20 mb-4 sm:hidden xs:hidden "
                                src={modalProduct.src}
                                alt={modalProduct.title}
                              />
                              <div>
                                <h3 className="font-semibold sm:hidden xs:hidden">
                                  {modalProduct.name}
                                </h3>
                                <p className="sm:hidden xs:hidden">QTY: 1</p>
                                <p className="sm:hidden xs:hidden">
                                  {modalProduct.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="mt-3 mb-3 sm:hidden xs:hidden">
                            You have just 1 item in your cart
                          </p>

                          <p className="font-bold mb-4 sm:hidden xs:hidden">
                            Total: {modalProduct.price}
                          </p>
                          <div className="space-y-2 ">
                            <button className="w-full border border-red-600 text-black py-2 rounded">
                              Continue Shopping
                            </button>
                            <Link
                              to={`/shopping_cart/${modalProduct.id}`}
                              className="w-full border border-red-600 text-black py-2 rounded block text-center"
                            >
                              View Cart
                            </Link>
                            <Link
                              to={`/checkoutDetails/${modalProduct.id}`}
                              className="w-full bg-red-600 text-white py-2 rounded block text-center"
                            >
                              Proceed to Checkout
                            </Link>
                          </div>
                        </div>
                        <button
                          onClick={closeModal}
                          className="w-6 h-6 border border-red-600  text-red-600 rounded items-center font-semibold hover:bg-red-600 hover:text-white sm:hidden xs:hidden"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TimbuOnlineStore;
