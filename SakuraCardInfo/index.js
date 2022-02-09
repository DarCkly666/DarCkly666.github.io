"use strict";

const url = "https://protected-taiga-89091.herokuapp.com/api/card";
//const url = "./helpers/data.json";

const cardsContainer = document.getElementById("cards_container");

const modal = document.getElementById("exampleModal");

const loader = document.getElementById("loading");

const searchIcon = document.getElementById("ic_search");

const inputSearch = document.getElementById("input_search");

let cards = [];

function getData(url) {
  fetch(url)
    .then((data) => data.json())
    .then((response) => {
      cards = response.data;
      getElements(cards);
      loader.style.visibility = "hidden";
    });
}

const cardElement = (card) => {
  return `
    <li class="card_item" >
      <a href="/cardDetail.html?id=${card._id}" target="_blank">
        <div>
          <p class="card_number">${card.cardNumber}</p>
          <img class="card_image" src="${card.sakuraCard}" alt="${card.englishName}" />
          <p class="card_title">${card.spanishName}</p>
        </div>
      </a>
    </li>
  `;
}

const getElements = (cards) => {
  cardsContainer.innerHTML = "";
  cards.forEach((item) => {
    if (item.spanishName){
      cardsContainer.innerHTML += cardElement(item);
    }
  });
}

inputSearch.addEventListener("input", (e) => {
  let cardsCopy = cards;
  cardsCopy = cards.filter((card) => String(card.spanishName).toLowerCase().includes(e.target.value.toLowerCase().trim()) | String(card.englishName).toLowerCase().includes(e.target.value.toLowerCase().trim()));
  getElements(cardsCopy);
});
getData(url);
