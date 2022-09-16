import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px mx-auto py-16 px-6 md:px-20 grid lg:grid-cols-3 gap-5 text-gray-300 font-sgRegular">
      <div>
        <h1 className="w-full text-3xl font-bold font-optivenus ">Shop Dojo</h1>
        <p className="py-4">
          Made by{" "}
          <span className="text-[white] font-extrabold">
            <a href="https://jayant.vercel.app">- Jayant Waldia</a>{" "}
          </span>
        </p>
        <div className="flex justify-between md:w-[75%] my-5">
          <FaGithub size={30} />
          <FaLinkedin size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium mb-4 text-gray-400 text-xl">Products</h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium mb-4 text-gray-400 text-xl">
            Recommended
          </h6>
          <ul>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
            <li className="py-2 text-sm">Shoes</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium mb-4 text-gray-400 text-xl">Support</h6>
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
