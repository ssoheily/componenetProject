import React from "react";
import "/.Clock..css"
export default function Clock() {

    
  return (
    <div>
      {/* <!-- ***** Clock Start ***** --> */}
      <div class="clock">
        <div id="hour">00</div>
        <span>:</span>
        <div id="minute">00</div>
        <span>:</span>
        <div id="seconds">00</div>
      </div>
      {/* <!-- ***** Clock End ***** --> */}
    </div>
  );
}
