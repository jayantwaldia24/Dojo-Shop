import React from "react";

function Navbar() {
  return (
    <>
      <div className="Nav">
        <div className="logo">Dojo Shop</div>
        <div className="section">
          <section>Women</section>
          <section>Men</section>
          <section>Brands</section>
          <section>Collections</section>
          <section>Drop</section>
          <section>Sale</section>
        </div>
        <div className="actions"></div>
      </div>
    </>
  );
}

export default Navbar;
