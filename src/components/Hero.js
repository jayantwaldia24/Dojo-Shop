import { Link } from "react-router-dom";
import heroClip from "../toolkit/assets/hero-clip.mp4";

function Hero() {
  return (
    <div className="text-white w-[100%] h-screen font-bold font-sgRegular">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]"></div>
      <video
        src={heroClip}
        autoPlay
        loop
        muted
        playsinline
        className="w-[100%] h-[100%] object-cover"
      ></video>
      <div className="absolute w-[100%] top-0 mt-[400px] md:ml-10 m-5 text-left flex flex-col gap-8 items-start justify-center">
        <Link to="/collections">
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
