import item5 from "../assets/item-5.jpg";

function Drop() {
  return (
    <>
      <div className="drop">
        <div className="drop-items">
          <div className="drop-desc">
            <h3 style={{ fontFamily: "Optivenus" }}>ALMOST GODS</h3>
            <h6 style={{ fontFamily: "Optivenus", color: "#C0BDB8" }}>
              The best t-shirt this season...
            </h6>
            <p>
              You can wear the Crewneck T-shirt from Almost Gods collection with
              any streetwear style. It is a timeless design with a regular cut
              and a round neckline. Thanks to the cotton fabric, you gain
              all-day.
            </p>
            <button>SHOP AT DOJO</button>
          </div>
          <div className="drop-image">
            <img src={item5} alt="Drop Collection"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drop;
