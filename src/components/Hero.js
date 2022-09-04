import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white max-w-[100%] w-full h-screen p-10">
      <div className="w-[100%] mt-[300px] text-left flex flex-col gap-8 items-start justify-between">
        <Link to="/products">
          <button className="bg-transparent hover:bg-white text-white-700 font-bold hover:text-black py-4 px-10 border-[2px] border-white-500 hover:border-transparent rounded-3xl text-l md:text-xl">
            New Collection
          </button>
        </Link>

        <p className="text-2xl md:text-5xl sm:text-4xl p-2">
          GET 30% OFF
          <br></br>
          <br></br>
          USE CODE: DOJO50
        </p>
      </div>
    </div>
  );
}

export default Hero;
