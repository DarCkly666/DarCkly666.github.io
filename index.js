const menu = document.getElementById("header_menu");
const nav = document.getElementById("nav");
let menuIsShowing = false;
menu.addEventListener("click", () => {
  if(menuIsShowing){
    nav.style.display = ("none");
    menuIsShowing = false;
  }else{
    nav.style.display = ("block");
    menuIsShowing = true;
  }
})

const goTop = document.getElementById("go_top");
const header = document.getElementById("header");

window.onscroll = () => { scrollFunction() }
function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    goTop.style.display = "block";
    header.style.backgroundColor = "#0F1418";
  }else{
    goTop.style.display = "none";
    header.style.backgroundColor = "#0f141800";
  }
}

goTop.addEventListener("click", () => {
  document.body.scrollTop = 0; //For safari
  document.documentElement.scrollTop = 0; //for chrome and others
});