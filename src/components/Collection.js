import ProductList from "./ProductList";
import { products } from "../backend/db/products";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <div className="w-full bg-white py-8 px-4 font-sgRegular">
      <p className="max-w-[1240px] mt-20 bg-white font-bold text-center mx-auto text-3xl md:text-5xl font-optivenus ">
        THE COLLECTION
      </p>
      <div className="mt-[60px]">
        {" "}
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 border-t-[1px] border-l-[1px] border-black">
          {products.map((product) => (
            <Link to={`/collections/${product._id}`} key={product._id}>
              <div className="border-r-[1px] border-b-[1px] group transition ease-in-out delay-90 border-black hover:bg-stone-600 hover:text-white hover:cursor-pointer">
                <div className="p-5 pb-0">
                  <p className="text-xl">{product.brand}</p>
                  <p>{product.name}</p>
                  <p className="font-bold mt-2">
                    ₹{" "}
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
                <img
                  className="w-[80%] mx-auto object-cover object-center"
                  src={product.img}
                  alt={product.img}
                ></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
