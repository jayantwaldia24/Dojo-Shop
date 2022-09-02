import dropItem from "../assets/item-5.jpg";

function Drop() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1240px] mx-auto mt-[50px] grid md:grid-cols-2 sm:grid-cols-2">
        <div className="mx-auto justify-center items-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ALMOST GODS
          </p>
          <h6>The best t-shirt this season...</h6>
          <p>
            You can wear the Crewneck T-shirt from Almost Gods collection with
            any streetwear style. It is a timeless design with a regular cut and
            a round neckline. Thanks to the cotton fabric, you gain all-day.
          </p>
          <button className="bg-transparent hover:bg-white text-white-700 font-bold hover:text-black py-4 px-10 border-[2px] border-white-500 hover:border-transparent rounded-3xl text-l md:text-xl">
            SHOP AT DOJO
          </button>
        </div>
        <div>
          <img
            className="w-[60%] mx-auto my-5"
            src={dropItem}
            alt="Drop Item"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Drop;
