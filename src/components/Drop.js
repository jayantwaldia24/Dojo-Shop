import dropItem from "../assets/item-5.jpg";

function Drop() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1240px] mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2">
        <div className="p-10 mx-auto justify-center items-center text-center md:text-left">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
            ALMOST GODS
          </p>
          <p className="text-2xl mb-10">The best t-shirt this season...</p>
          <p className="mb-10">
            You can wear the Crewneck T-shirt from Almost Gods collection with
            any streetwear style. It is a timeless design with a regular cut and
            a round neckline. Thanks to the cotton fabric, you gain all-day.
          </p>
          <button className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-3 px-8 border-[2px] border-white-500 hover:border-transparent rounded-3xl text-l md:text-xl">
            SHOP AT DOJO
          </button>
        </div>
        <div>
          <img
            className="w-[50%] mx-auto my-5"
            src={dropItem}
            alt="Drop Item"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Drop;
