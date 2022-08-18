import item1 from "../assets/item-1.jpg";
import item2 from "../assets/item-2.webp";
import item3 from "../assets/item-3.webp";
import item4 from "../assets/item-4.webp";

function Collection() {
  return (
    <>
      <div className="collection">
        <h1 style={{ fontFamily: "Optivenus" }}>THE COLLECTION</h1>
        <div className="items">
          <div className="shop-grid">
            <div className="item-1">
              <img src={item1} alt="product"></img>
            </div>
            <div className="item-1">
              <img src={item2} alt="product"></img>
            </div>
            <div className="item-1">
              <img src={item3} alt="product"></img>
            </div>
            <div className="item-1">
              <img src={item4} alt="product"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
