import Link from "next/link";
import React from "react";
const Tshirts = ({ data }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((res) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-2 w-full shadow-lg" key={res._id}>
                  <Link passHref={true}
                    href={`/product/${res.slug}`}
                    className="block relative  rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="h-[30vh] md:h-[36vh] block m-auto "
                      src={res.img}
                    />
                  </Link>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
                      {res.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {res.title}
                    </h2>
                    <p className="mt-1">₹{res.price}</p>
                    <p className="mt-1">{res.size}</p>
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
  let product = await fetch("http://localhost:3000/api/getProducts?cat=tshirt");
  let data = await product.json();
  return {
    props: { data },
  };
}
export default Tshirts;
