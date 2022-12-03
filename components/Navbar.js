import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
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
        <Link href={"/"}>
          <AiOutlineShoppingCart className="text-xl md:text-3xl" />
        </Link>
      </div>
      <div
        ref={ref}
        className="sidecart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-3 right-4 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol>
          <li>Tshirt - Wear the code</li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
