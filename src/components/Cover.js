import React from "react";

function MainCover() {
  return (
    <>
      <div className="main">
        <div className="main-tagline">GET 30% OFF USE CODE: DOJO30</div>
      </div>
      <div className="about">
        <div className="brands"></div>
        <div className="about-shop">
          <h3 style={{ fontFamily: "Optivenus" }}>DOJO SHOP</h3>
          <p>
            We sell various original streetwear brands at good prices.
            <br></br> Surely everyone will find something for themselves at
            dojo.
          </p>
          <h6 style={{ fontFamily: "Optivenus" }}>SHOP AT DOJO</h6>
        </div>
        <div className="brands"></div>
      </div>
    </>
  );
}

function Cover() {
  return (
    <>
      <MainCover />
    </>
  );
}

export default Cover;
