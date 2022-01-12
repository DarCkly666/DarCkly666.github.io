'use strict';

let submit = document.getElementById("submit_form");
const toastLive = document.getElementById("liveToast");
const nameForm = document.getElementById("formName");
const emailForm = document.getElementById("formMail");
const messageForm = document.getElementById("formMessage");

function showToast(message, headerClass){
  let toast = new bootstrap.Toast(toastLive);
  const toastHeader = document.querySelector(".toast-header");
  const toastBody = document.querySelector(".toast-body");

  toastHeader.className = headerClass;
  toastBody.innerHTML = message;
  toast.show();
}

function checkInput(){
  if(nameForm.value.trim().length === 0 || emailForm.value.trim().length === 0 || messageForm.value.trim().length === 0){
    showToast("Fill all the fields please.", "toast-header bg-danger");
  }else{
    showToast("Thanks for contact us, we will answer you as soon as possible!", "toast-header bg-success");
    nameForm.value = "";
    emailForm.value = "";
    messageForm.value = "";
  }
}

function sendForm(e){
  e.preventDefault();
  
  checkInput();
  
}

submit.addEventListener("click", (e) => {sendForm(e)});