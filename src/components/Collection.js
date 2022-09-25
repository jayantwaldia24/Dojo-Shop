import ProductList from "./ProductList";

function Collection() {
  return (
    <div className="w-full bg-white py-8 px-4 font-sgRegular">
      <p className="max-w-[1240px] mt-20 bg-white font-bold text-center mx-auto text-3xl md:text-5xl font-optivenus ">
        THE COLLECTION
      </p>
      <div className="mt-[60px]">
        {" "}
        <ProductList />
      </div>
    </div>
  );
}

export default Collection;
