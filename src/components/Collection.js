import item1 from "../toolkit/assets/item-1.png";
import item2 from "../toolkit/assets/item-2.png";
import item3 from "../toolkit/assets/item-3.png";
import item4 from "../toolkit/assets/item-4.png";

function Collection() {
  return (
    <div className="w-full bg-white py-8 px-4 font-sgRegular">
      <h1 className="max-w-[1240px] m-[80px] font-bold text-center mx-auto text-3xl md:text-5xl font-optivenus ">
        THE COLLECTION
      </h1>
      <div className="max-w-[1240px] mx-auto mt-[50px] grid md:grid-cols-3 sm:grid-cols-2 border-t-[1px] border-l-[1px] border-black">
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <p className="text-xl">Nike Air</p>
            <p>Women's Running Jacket</p>
            <p className="font-bold mt-2">₹ 5,995</p>
          </div>

          <img className="w-[80%] mx-auto" src={item1} alt="item1"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <p className="text-xl">Jordan Essentials</p>
            <p>Men's Graphic T-Shirt</p>
            <p className="font-bold mt-2">₹ 1,795</p>
          </div>
          <img className="w-[80%] mx-auto" src={item2} alt="item-2"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <p className="text-xl">Nike Yoga Dri-FIT Luxe</p>
            <p>Women's Cropped Tank</p>
            <p className="font-bold mt-2">₹ 2,895</p>
          </div>
          <img className="w-[80%] mx-auto" src={item3} alt="item-3"></img>
        </div>
        <div className="border-r-[1px] border-b-[1px] border-black">
          <div className="p-5 pb-0">
            <p className="text-xl">Nike Dri-FIT Legend</p>
            <p>Men's Graphic Training T-Shirt</p>
            <p className="font-bold mt-2">₹ 1,795</p>
          </div>
          <img className="w-[80%] mx-auto" src={item4} alt="item-4"></img>
        </div>
      </div>
    </div>
  );
}

export default Collection;
