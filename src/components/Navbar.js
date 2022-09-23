import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const handleMobView = () => {
    setMobNav(!mobNav);
  };
  return (
    <header className="fixed w-full font-sgLight z-2">
      <div className="flex md:grid md:grid-cols-3 justify-between items-center h-20 max-w-[100%] mx-auto px-4 md:px-8 bg-black  text-white sticky top-0 ">
        <Link to="/">
          <h1 className="w-full text-xl lg:text-2xl font-optivenus">
            Shop Dojo
          </h1>
        </Link>

        <ul className="hidden md:flex">
          <li className="p-4">Women</li>
          <li className="p-4">Men</li>
          <li className="p-4">Brands</li>
          <Link to="/collection">
            <li className="p-4">Collection</li>
          </Link>
          <li className="p-4">Drop</li>
        </ul>
        <ul className="hidden md:flex justify-end">
          {/* <li className="p-4">
            <FaHeart size={20} />
          </li> */}
          <li className="p-4">
            <FaShoppingCart size={20} />
          </li>
          <li className="p-4">
            <AiOutlineUser size={20} />
          </li>
        </ul>

        <ul className="flex block md:hidden ">
          {/* <li className="p-4">
            <FaHeart size={20} />
          </li> */}

          <li onClick={handleMobView} className="p-2">
            {mobNav ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </li>
        </ul>
        <div
          className={
            mobNav
              ? "fixed left-0 top-[70px] w-[100%] border-r h-full border-r-gray-900 bg-black ease-in-out duration-1000 md:hidden z-900"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Women</li>
            <li className="p-4 border-b border-gray-600">Men</li>
            <li className="p-4 border-b border-gray-600">Brands</li>
            <li className="p-4 border-b border-gray-600">Collection</li>
            <li className="p-4 border-b border-gray-600">Drop</li>
            <li className="flex gap-3 p-4 border-b border-gray-600">
              <FaShoppingCart size={20} />
              Cart
            </li>
            <li className=" flex gap-3 p-4 border-b border-gray-600">
              <AiOutlineUser size={20} />
              Profile
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
