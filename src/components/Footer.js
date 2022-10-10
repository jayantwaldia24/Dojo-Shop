import { FaGlobe, FaBehance } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full mx-auto px-10 md:px-20 py-10 grid lg:grid-cols-4 gap-5 justify-between text-gray-300 font-sgRegular">
      <div>
        <h1 className="w-full text-3xl font-bold font-optivenus ">Shop Dojo</h1>
        <p className="py-4">
          Made by{"  "}
          <span className="text-[white] font-extrabold">- Jayant Waldia</span>
        </p>
        <a
          href="https://jayant.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe size={20} />
        </a>
      </div>
      <div>
        <h6 className="font-medium mb-4 text-gray-400 text-xl">Products</h6>
        <ul>
          <li className="py-2 text-sm">Nike Dri-FIT</li>
          <li className="py-2 text-sm">Nike Air</li>
          <li className="py-2 text-sm">Jordan Essentials</li>
          <li className="py-2 text-sm">Nike SB</li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium mb-4 text-gray-400 text-xl">Socials</h6>
        <ul>
          <li className="py-2 text-sm">
            <a
              href="https://github.com/jayantwaldia"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github
            </a>
          </li>
          <li className="py-2 text-sm">
            <a
              href="https://www.linkedin.com/in/jayantwaldia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Linkedin
            </a>
          </li>
          <li className="py-2 text-sm">
            <a
              href="https://twitter.com/jayantwaldia"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium mb-4 text-gray-400 text-xl">
          Design Inspiration
        </h6>
        <ul>
          <li className="py-2 text-sm">
            <a
              href="https://www.behance.net/gallery/149888453/STREATSHOP-Streetwear-Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaBehance size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
