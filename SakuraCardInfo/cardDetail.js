"use strict";

const cardRoot = document.getElementById("card_root");
const querySearch = window.location.search;
const urlParams = new URLSearchParams(querySearch);
const cardID = urlParams.get("id");
const loading = document.getElementById("loading");

const cardDetails = document.getElementById("card_details");
const imagesContainer = document.getElementById("image_container");
const cardSakura = document.getElementById("card_sakura");
const cardClow = document.getElementById("card_clow");
const cardTitle = document.getElementById("card_title");

const url = `https://protected-taiga-89091.herokuapp.com/api/card/${cardID}`;

function getData(url){
  fetch(url).then(data => data.json()).then(response => {
    const card = response;
    loading.style.visibility = "hidden";
    document.title = response.spanishName;

    cardTitle.textContent = card.spanishName;
    cardDetails.innerHTML = `
      <p class="card_number"><b>Nº:</b> ${card.cardNumber}</p>
      <p class="card_name_spanish"><b>Nombre (Español):</b> ${card.spanishName}</p>
      <p class="card_name_english"><b>Nombre (Inglés):</b> ${card.englishName}</p>
      <p class="card_name_kanji"><b>Nombre (Kanji):</b> ${card.kanji}</p>
      <p class="card_name_romanji"><b>Nombre (Romanji):</b> ${card.Rōmaji}</p>
      <p class="card_meaning"><b>Significado:</b> ${card.meaning}</p>
    `;

    cardSakura.innerHTML = `
      <p class="sakura_cards fs-5 fw-bold lh-lg">Sakura</p>
      <div class="div_card_images">
        <img src="${card.sakuraCard}" alt="front" class="sakura_card_front" />
        <img src="${card.cardsReverse.sakuraReverse}" alt="back" class="sakura_card_back" />
      </div>
    `;

    cardClow.innerHTML = `
      <p class="clow_cards fs-5 fw-bold lh-lg">Clow</p>
      <div class="div_card_images">
        <img src="${card.clowCard}" alt="front" class="clow_card_front" />
        <img src="${card.cardsReverse.clowReverse}" alt="back" class="clow_card_back" />
      </div>
    `;
  });
}

getData(url);