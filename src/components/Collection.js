import item1 from "../assets/item-1.png";
import item2 from "../assets/item-2.png";
import item3 from "../assets/item-3.png";
import item4 from "../assets/item-4.png";
import ProductCard from "./ProductCard";

function Collection() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="max-w-[1240px] font-bold text-center mx-auto text-3xl md:text-5xl ">
        THE COLLECTION
      </h1>
      <div className="max-w-[1240px] mx-auto mt-[50px] grid md:grid-cols-3 sm:grid-cols-2 border-t-[1px] border-l-[1px] border-black">
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <h3>Nike Air</h3>
            <p>Women's Running Jacket</p>
            <p>₹5,995</p>
          </div>

          <img className="w-[80%] mx-auto" src={item1} alt="item1"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <h3>Jordan Essentials</h3>
            <p>Men's Graphic T-Shirt</p>
            <p>₹1,795</p>
          </div>
          <img className="w-[80%] mx-auto" src={item2} alt="item-2"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <h3>Nike Yoga Dri-FIT Luxe</h3>
            <p>Women's Cropped Tank</p>
            <p>₹2,895</p>
          </div>
          <img className="w-[80%] mx-auto" src={item3} alt="item-3"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <h3>Nike Dri-FIT Legend</h3>
            <p>Men's Graphic Training T-Shirt</p>
            <p>₹1,795</p>
          </div>
          <img className="w-[80%] mx-auto" src={item4} alt="item-4"></img>
        </div>
      </div>
    </div>
  );
}

export default Collection;
