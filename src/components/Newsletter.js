import displayImage1 from "../assets/display-image-1.png";

function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <div className="display-image">
          <img src={displayImage1}></img>
        </div>
        <div className="subscribe">
          <h3 style={{ fontFamily: "Optivenus" }}>SUBSCRIBE TO NEWSLETTER</h3>
          <p>
            BE THE FIRST TO GET INFORMATION ABOUT THE LATEST DROPS AND
            PROMOTIONS
          </p>
          <input placeholder="Enter your E-Mail Address" />
        </div>
        <div className="display-image"></div>
      </div>
    </>
  );
}

export default Newsletter;
