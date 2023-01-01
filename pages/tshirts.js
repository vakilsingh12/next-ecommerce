import Link from "next/link";
import React from "react";
const Tshirts = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Object.keys(data).map((res) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-2 w-full shadow-lg" key={data[res]._id}>
                  <Link passHref={true}
                    href={`/product/${data[res].slug}`}
                    className="block relative  rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="h-[30vh] md:h-[36vh] block m-auto "
                      src={data[res].img}
                    />
                  </Link>
                  <div className="mt-4 text-center md:text-left ml-20">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
                      {data[res].category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {data[res].title}
                    </h2>
                    <p className="mt-1">₹{data[res].price}</p>
                    <div className="mt-1">
                    {data[res].size.includes('S') && <span className="border px-1 mx-1 border-gray-300">S</span>}
                    {data[res].size.includes('M') && <span className="border px-1 mx-1 border-gray-300">M</span>}
                    {data[res].size.includes('XL') && <span className="border px-1 mx-1 border-gray-300">XL</span>}
                    {data[res].size.includes('XXL') && <span className="border px-1 mx-1 border-gray-300">XXL</span>}
                    </div>
                    <div className="mt-1">
                    {data[res].color.includes('Blue') && <button className="border-2 mx-1 bg-blue-700 border-blue-300 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {data[res].color.includes('Black') && <button className="border-2 mx-1 bg-black border-black-300 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {data[res].color.includes('Red') && <button className="border-2 mx-1 bg-red-700 border-red-300 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {data[res].color.includes('Yellow') && <button className="border-2 mx-1 bg-yellow-700 border-yellow-300 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {data[res].color.includes('Green') && <button className="border-2 mx-1 bg-green-700 border-green-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {data[res].color.includes('Purple') && <button className="border-2 mx-1 bg-purple-700 border-purple-300 rounded-full w-6 h-6 focus:outline-none"></button>}  
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  let product = await fetch("http://localhost:3000/api/productvariants?cat=tshirt");
  let data = await product.json();
  return {
    props: { data },
  };
}
export default Tshirts;
