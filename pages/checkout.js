import Link from "next/link";
import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Checkout = ({ cart, addToCart, clearCart, removeFromCart, subTotal }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="my-2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            cols={"30"}
            rows={"2"}
            className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-4">
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="my-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Pin code
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl">2. Review Cart Item & Pay</h2>
      {subTotal ? (
        <div className=" z-10 sidecart py-1 px-4 m-2">
          <ol className="py-2 list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-1 text-base font-normal">
                Your cart is empty!
              </div>
            )}
            {Object.keys(cart).map((res) => {
              return (
                <li key={res}>
                  <div className="item flex my-3">
                    <div className="font-semibold">{cart[res].name}</div>
                    <div className="flex font-semibold justify-center items-center w-1/3 text-xl">
                      <AiOutlineMinusCircle
                        onClick={() =>
                          removeFromCart(
                            res,
                            cart[res].qty,
                            cart[res].price,
                            cart[res].name,
                            cart[res].size,
                            cart[res].variant
                          )
                        }
                        className="cursor-pointer text-pink-500"
                      />
                      <span className="mx-2">{cart[res].qty}</span>
                      <AiOutlinePlusCircle
                        onClick={() =>
                          addToCart(
                            res,
                            cart[res].qty,
                            cart[res].price,
                            cart[res].name,
                            cart[res].size,
                            cart[res].variant
                          )
                        }
                        className="cursor-pointer text-pink-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="font-bold">Subtotal : ₹{subTotal}</span>
          <div className="my-4">
            <Link href={"/checkout"}>
              <button className="flex mr-2 items-center text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-700 rounded text-md ">
                <BsFillBagCheckFill className="mx-1" /> Pay ₹{subTotal}
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="my-1 text-base font-normal">Your cart is empty!</div>
      )}
    </div>
  );
};

export default Checkout;
