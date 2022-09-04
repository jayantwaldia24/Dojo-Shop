import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const handleMobView = () => {
    setMobNav(!mobNav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[100%] mx-auto px-8 text-white ">
      <h1 className="w-full text-3xl font-bold ">Shop Dojo</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Women</li>
        <li className="p-4">Men</li>
        <li className="p-4">Brands</li>
        <li className="p-4">Collection</li>
        <li className="p-4">Drop</li>
        <li className="p-4">Sale</li>
      </ul>
      <div onClick={handleMobView} className="block md:hidden">
        {mobNav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={
          mobNav
            ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-black ease-in-out duration-1000 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 p-4">Shop Dojo</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Women</li>
          <li className="p-4 border-b border-gray-600">Men</li>
          <li className="p-4 border-b border-gray-600">Brands</li>
          <li className="p-4 border-b border-gray-600">Collection</li>
          <li className="p-4 border-b border-gray-600">Drop</li>
          <li className="p-4">Sale</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
