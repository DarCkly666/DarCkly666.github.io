const menu = document.querySelector(".menu_icon");
const nav = document.getElementById("nav");
const items = document.getElementsByClassName("item");
let menuIsShowing = false;

const openCloseMenu = () => {
  menu.classList.toggle("menu_active");
  if (menuIsShowing) {
    nav.style.top = "-300px";
    menuIsShowing = false;
  } else {
    nav.style.top = "69px";
    menuIsShowing = true;
  }
};
// menu.addEventListener("click", () => {
//   openCloseMenu();
// });

const goTop = document.getElementById("go_top");
const header = document.querySelector(".header");

window.onscroll = () => {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // goTop.style.opacity = "1";
    header.style.backdropFilter = "blur(20px)";
    //   backdrop-filter: blur(5px);
    // -webkit-backdrop-filter: blur(5px);
  } else {
    // goTop.style.opacity = "0";
    header.style.backgroundColor = "transparent";
  }
}

// goTop.addEventListener("click", () => {
//   document.body.scrollTop = 0; //For safari
//   document.documentElement.scrollTop = 0; //for chrome and others
// });
