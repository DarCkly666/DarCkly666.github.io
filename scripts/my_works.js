'use strict';

let myWorks = [];
const worksContainer = document.querySelector(".my_work_container");

fetch("../assets/my_work.json")
.then(data => data.json())
.then(response => {
  console.log(response);
  response.forEach(work => {
    console.log(work.title);
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
    </div>
  `;
  return contWork;
}