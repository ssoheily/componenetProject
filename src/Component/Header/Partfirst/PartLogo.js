

let $ = document;

/* <!-- ***** Clock Start ***** --> */
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

setInterval(function () {
  let dateToday = new Date();
  let h = dateToday.getHours();
  let m = dateToday.getMinutes();
  let s = dateToday.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
}, 1000);

/* <!-- ***** Clock End ***** --> */

/* <!-- ***** Switch Start ***** --> */

const switchElement = document.querySelector(".switch");
switchElement.addEventListener("click", function () {
  // Hibnt: Add 'dark' class to body :))
  $.body.classList.toggle("dark");
  if ($.body.className.includes("dark")) {
    localStorage.setItem("thema", "dark");
  } else {
    localStorage.setItem("thema", "light");
  }
});

window.onload = function checkThema() {
  let check = localStorage.getItem("thema");
  if (check === "dark") {
    $.body.classList.add("dark");
  }
};

/* <!-- ***** Switch End ***** --> */

export {}