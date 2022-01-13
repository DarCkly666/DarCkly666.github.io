'use strict';

let myWorks = [];
const worksContainer = document.querySelector(".my_work_container");

fetch("../assets/my_work.json")
.then(data => data.json())
.then(response => {
  response.forEach(work => {
    worksContainer.appendChild(createItemWork(work));
  });
})
.catch(error => {console.error(error)});

const createItemWork = (item) => {
  const contWork = document.createElement("div");
  contWork.className = "my_work_item";
  contWork.style.backgroundImage = `url("${item.image}")`;
  contWork.innerHTML = `
    <div class="work_title_container">
      <p class="work_title">${item.title}</p>
      <button class="btn_view">
        <a href="${item.url}" target="_blank">View</a>
      </button>
      <button class="btn_view gh">
        <a href="${item.url_github}" target="_blank">View GitHub Repo</a>
      </button>
    </div>
  `;
  return contWork;
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})