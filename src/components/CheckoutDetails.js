import React from "react";
import products from "./ProductArray";
import { useParams } from "react-router-dom";
import Visa from "../components/assets/Images/Visa.png";

const Checkout = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <main className=" p-4">
        <div className=" mx-auto">
          <h1 className="text-left xs:font-bold xs:ml-0 xs:mb-2 sm:font-bold sm:ml-32 sm:mb-4 md:text-2xl md:font-bold md:ml-8 lg:text-3xl lg:font-bold lg:mb-8 lg:ml-32  ">
            CHECKOUT
          </h1>

          <div className="flex xs:flex-col sm:flex-col md:flex-row  justify-between w-full gap-8">
            {/* Left Column - Billing Information */}
            <div className="mx-auto md:w-2/5">
              <h2 className="text-xl font-semibold mb-4  ">
                Billing Information
              </h2>
              <form>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 mb-4 border rounded"
                />

                <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                <input
                  type="text"
                  placeholder="Street"
                  className="w-full p-2 mb-4 border rounded"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 mb-4 border rounded"
                />
                <div className="flex gap-4 mb-4">
                  <select className="w-1/2 p-2 border rounded">
                    <option>State</option>
                  </select>
                  <select className="w-1/2 p-2 border rounded">
                    <option>Zip Code</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-2 mb-4 border rounded"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Delivery Schedule
                </h3>
                <input
                  type="text"
                  placeholder="Date..."
                  className="w-full p-2 mb-4 border rounded"
                />
                <select className="w-full p-2 mb-4 border rounded">
                  <option>Select a Delivery Period</option>
                </select>
                <div className="flex gap-4 mb-4">
                  <select className="w-1/2 p-2 border rounded">
                    <option>Time</option>
                  </select>
                  <select className="w-1/2 p-2 border rounded">
                    <option>Time range</option>
                  </select>
                </div>
                <select className="w-full p-2 mb-4 border rounded">
                  <option>Delivery Type</option>
                </select>
                <textarea
                  placeholder="Kindly drop your instruction"
                  className="w-full p-2 border rounded"
                  rows="4"
                ></textarea>
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="mx-auto md:w-2/5 ">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="bg-white p-8 rounded-lg shadow mb-4">
                {products
                  .filter((product) => String(product.id) === String(id))
                  .map((product, id) => (
                    <div key={id} className="flex items-center mb-4">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">Size: Big</p>
                        <p className="font-semibold">{product.price}</p>
                      </div>
                      <span className="ml-auto  px-2 py-1 rounded-full text-sm">
                        ₦80,000
                      </span>
                    </div>
                  ))}

                <div className="flex mb-4">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="flex w-full md:flex-grow p-2 border rounded-l"
                  />
                  <button className="bg-red-600 text-white px-4 py-2 rounded-r">
                    Apply
                  </button>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>₦80,000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>₦2,000</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Order Total</span>
                    <span>₦82,000</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Method of Payment</h3>
              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex justify-between items-center mb-2">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment"
                    className="mr-2"
                  />
                  <label htmlFor="credit-card">Credit Card</label>
                  <input
                    type="radio"
                    id="online-payment"
                    name="payment"
                    className="ml-4 mr-2 "
                  />
                  <label htmlFor="online-payment">Online Payment</label>
                  <img src={Visa} alt="" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 mt-0">
                Securely pay with your credit card
              </p>
              <div className="xs:text-right sm:text-right">
                <button className="xs:w-1/3  sm:w-1/3 md:w-full lg:w-full bg-red-600 text-white py-2 rounded">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
