import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex py-2 justify-between flex-col items-center md:flex-row md:justify-start shadow-md">
      <div className="logo mx-5">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image src="/logo.webp" alt="logo" width={200} height={20} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 mx-5 top-4 md:top-auto"
      >
        <AiOutlineShoppingCart className="text-xl md:text-3xl cursor-pointer" />
      </div>
      <div
        ref={ref}
        className="w-72 h-full z-10 sidecart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-3 right-4 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="py-2 list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold justify-center items-center w-1/3 text-xl">
                <AiOutlineMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2">1</span>
                <AiOutlinePlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold justify-center items-center w-1/3 text-xl">
                <AiOutlineMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2">5</span>
                <AiOutlinePlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold justify-center items-center w-1/3 text-xl">
                <AiOutlineMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2">4</span>
                <AiOutlinePlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold justify-center items-center w-1/3 text-xl">
                <AiOutlineMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2">2</span>
                <AiOutlinePlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
        <button className="flex mr-2 items-center text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-700 rounded text-md ">
          <BsFillBagCheckFill className="mx-1" /> Checkout
        </button>
        <button className="flex mr-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-700 rounded text-md ">
          Clear Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;