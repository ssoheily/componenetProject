import "./Header.css";
import React from "react";
import Clock from "./Component/Header/Partfirst/Clock/Clock.JS";
export default function Header() {
  return (
    <div>
      <header class="headerElem">
        <Clock></Clock>
        {/* <!-- ***** Logo Runlos   Start ***** --> */}
        <div class="containerLogo">
          <div class="logoRunlos brightness-box">
            <img
              class="responsive"
              src="http://runlos.com/images/runlos.png"
              alt="logo"
            />
          </div>
        </div>
        {/* <!-- ***** Logo Runlos End ***** --> */}

        {/* <!-- deactive  --> */}
        {/* // <!-- ***** Switch Start ***** --> */}
        <div class="switch">
          <div class="flicker"></div>
          <div class="moon"></div>
          {/* <!-- ***** Switch End ***** --> */}
        </div>
      </header>
    </div>
  );
}
