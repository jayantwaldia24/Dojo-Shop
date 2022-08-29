import displayImage1 from "../assets/display-image-1.png";
import displayImage2 from "../assets/display-image-2.png";

function Newsletter() {
  return (
    <>
      <div className="whitespace"></div>
      <div className="newsletter">
        <div className="display-image-1">
          <img src={displayImage1} alt="A white t-shirt"></img>
        </div>
        <div className="subscribe">
          <h3 style={{ fontFamily: "Optivenus" }}>SUBSCRIBE TO NEWSLETTER</h3>
          <p>
            BE THE FIRST TO GET INFORMATION ABOUT THE LATEST DROPS AND
            PROMOTIONS
          </p>
          <input placeholder="Enter your E-Mail Address" />
        </div>
        <div className="display-image-2">
          <img src={displayImage2} alt="Red Air Jordans"></img>
        </div>
      </div>
      <div className="whitespace"></div>
    </>
  );
}

export default Newsletter;
