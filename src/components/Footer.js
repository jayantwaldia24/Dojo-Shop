import application from "../assets/mobile-appstore.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logo-footer">
          Shop At <br></br>Dojo
        </div>
        <div className="producs-footer">
          <h5>PRODUCTS</h5>
          <ul>
            <li>Shoes</li>
            <li>Clothes</li>
            <li>Accessories</li>
            <li>Outlets</li>
            <li>Drops</li>
          </ul>
        </div>
        <div className="recommended">
          <h5>RECOMMENDED</h5>
          <ul>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Jordans</li>
            <li>Supreme</li>
            <li>Almost Gods</li>
          </ul>
        </div>
        <div className="support">
          <h5>COMPANY</h5>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Carrer</li>
            <li>Investors</li>
          </ul>
        </div>

        <div className="copyrights">
          <h5> Made By -</h5>
          <ul>
            <li>
              <a href="https://jayant.vercel.app/" target="_blank">
                <span className="Highlight">
                  <b>Jayant Waldia</b>
                </span>
              </a>
            </li>
            <li>
              <a
                style={{ color: "white" }}
                href="https://jayant.vercel.app/"
                target="_blank"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-app">
          <img src={application} alt="Download via App Store"></img>
        </div>
      </div>
    </>
  );
}

export default Footer;
