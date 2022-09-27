import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <>
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
    </>
  );
}

export default ProductList;
