'use strict';

let submit = document.getElementById("submit_form");
const toastLive = document.getElementById("liveToast");

function sendForm(e){
  e.preventDefault();
  let toast = new bootstrap.Toast(toastLive);
  toast.show();
}
submit.addEventListener("click", (e) => {sendForm(e)});