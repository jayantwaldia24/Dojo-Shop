import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px mx-auto py-16 px-6 grid lg:grid-cols-3 gap-5 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold ">Shop Dojo</h1>
        <p className="py-4">Made by Jayant Waldia</p>
        <div className="flex justify-between md:w-[75%] my-5">
          <FaGithub size={30} />
          <FaLinkedin size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Products</h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Recommended</h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
