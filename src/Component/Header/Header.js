import "./Header.css"
import React from 'react'

export default function Header() {
  return (
    <div>  <header class="headerElem">
    {/* <!-- ***** Clock Start ***** --> */}
    <div class="clock">
      <div id="hour">00</div>
      <span>:</span>
      <div id="minute">00</div>
      <span>:</span>
      <div id="seconds">00</div>
    </div>
    {/* <!-- ***** Clock End ***** --> */}
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
    {/* <!-- ***** resolotion Start ***** --> */}
    {/* <!-- <div class="resoltion"> --> */}
    {/* <!-- <div class="brightness-box"> */}
        <i class="far fa-sun"></i>
        <input
          class="rang"
          type="range"
          id="range"
          min="10"
          max="100"
          value="100"
        />
        <i class="fas fa-sun"></i>
      {/* </div> --> */}
    {/* <!-- </div> --> */}

    {/* // <!-- ***** resolotion End ***** --> */}
    {/* // <!-- ***** Switch Start ***** --> */}
    <div class="switch">
      <div class="flicker"></div>
      <div class="moon"></div>
      {/* <!-- ***** Switch End ***** --> */}
    </div>
  </header></div>
  )
}
