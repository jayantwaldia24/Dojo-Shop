import display1 from "../assets/display-image-1.png";
import display2 from "../assets/display-image-2.png";

function Newsletter() {
  return (
    <div className="w-full bg-[#f5f5f5] text-black">
      <div className="p-5 max-w-[1240px] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-3 justify-center items-center">
        <img
          className="w-[50%] md:w-[80%] sm:w-[60%] mx-auto my-5"
          src={display1}
          alt="White T-shirt"
        ></img>
        <div className="text-center py-4">
          <p className="md:text-4xl sm:text-3xl text-2xl mb-8 font-bold">
            SUBSCRIBE TO NEWSLETTER
          </p>
          <p>
            BE THE FIRST TO GET INFORMATION ABOUT THE LATEST DROPS AND PROMOTION
          </p>
          <div className="mx-auto mt-10 w-[80%] grid grid-cols-1 justify-center">
            <input
              className="mb-8 bg-white p-3 rounded-lg border-[0.5px]"
              type="email"
              placeholder="Enter your E-Mail address"
            />
            <button className="p-3 bg-transparent hover:bg-black text-white-700 font-semibold hover:text-white border-[2px] border-white-500 hover:border-transparent rounded-lg ">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <img
          className="w-[50%] md:w-[80%] sm:w-[60%] mx-auto my-5"
          src={display2}
          alt="Red Jordan's Shoes"
        ></img>
      </div>
    </div>
  );
}

export default Newsletter;
