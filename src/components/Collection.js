import { products } from "../backend/db/products";

function Collection() {
  return (
    <div className="w-full bg-white py-8 px-4 font-sgRegular">
      <h1 className="max-w-[1240px] m-[80px] font-bold text-center mx-auto text-3xl md:text-5xl font-optivenus ">
        THE COLLECTION
      </h1>

      <div className="max-w-[1240px] mx-auto mt-[50px] grid md:grid-cols-3 sm:grid-cols-2 border-t-[1px] border-l-[1px] border-black">
        {products.map((product) => (
          <div className="border-r-[1px] border-b-[1px] border-black">
            <div className="p-5 pb-0">
              <p className="text-xl">{product.brand}</p>
              <p>{product.name}</p>
              <p className="font-bold mt-2">
                ₹{" "}
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <img
              className="w-[80%] mx-auto"
              src={product.img}
              alt={product.img}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
