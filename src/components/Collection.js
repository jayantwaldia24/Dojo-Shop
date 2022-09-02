import item1 from "../assets/item-1.jpg";
import item2 from "../assets/item-2.webp";
import item3 from "../assets/item-3.webp";
import item4 from "../assets/item-4.webp";

function Collection() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="max-w-[1240px] font-bold text-center mx-auto text-3xl md:text-5xl ">
        THE COLLECTION
      </h1>
      <div className="max-w-[1240px] mx-auto mt-[50px] grid md:grid-cols-3 sm:grid-cols-2">
        <img className="w-[80%] mx-auto my-5" src={item1} alt="item1"></img>
        <img className="w-[80%] mx-auto my-5" src={item2} alt="item-2"></img>
        <img className="w-[80%] mx-auto my-5" src={item3} alt="item-3"></img>
        <img className="w-[80%] mx-auto my-5" src={item4} alt="item-4"></img>
      </div>
    </div>
  );
}

export default Collection;
