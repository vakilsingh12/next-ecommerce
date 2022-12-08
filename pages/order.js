import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #876567898
              </h1>
              <p className="leading-relaxed mb-4">
                Your order has been successfully placed!
              </p>
              <div class="flex mb-4">
                <span class="flex  border-gray-500 py-2 text-lg px-1">
                  Product Decription
                </span>
                <span class="flex ml-auto  border-gray-300 py-2 text-lg px-1">
                  Quantity
                </span>
                <span class="flex ml-auto  border-gray-300 py-2 text-lg px-1">
                  Item Total
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code XL/Black</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code XL/Black</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Wear the code XL/Black</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">₹499</span>
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                ₹1597
                </span>
               <div className="my-4">
               <button className="flex mx-0 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
               </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-24 object-cover object-center rounded"
              src="https://m.media-amazon.com/images/I/61rSf7lBx1L._UX569_.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
