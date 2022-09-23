import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white max-w-[100%] w-full h-screen p-5 md:p-10 font-bold font-sgRegular">
      <div className="w-[100%] mt-[400px] md:ml-5 text-left flex flex-col gap-8 items-start justify-between">
        <Link to="/collection">
          <button className="bg-transparent tracking-wider hover:bg-white text-white-700 font-bold hover:text-black py-4 px-6 border-[2px] border-white-500 hover:border-transparent rounded-3xl text-l md:text-xl">
            New Collection
          </button>
        </Link>

        <p className="text-xl md:text-3xl sm:text-2xl p-2 font-light tracking-wider font-optivenus">
          <span className="text-[gray]">GET</span> 30% OFF
          <br></br>
          <br></br>
          <span className="text-[gray]">USE CODE: </span>DOJO30
        </p>
      </div>
    </div>
  );
}

export default Hero;
