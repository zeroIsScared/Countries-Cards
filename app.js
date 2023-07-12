'use strict';
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector('.countries');


/////////////////////////
const getCountryData = function (country) {

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

request.send();

request.addEventListener('load',function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const langauges = Object.values(data.languages);
  const currencies = Object.values(data.currencies)
 // console.log(currencies);
const html =
 ` <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.altSpellings[1]}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${langauges[0]}</p>
    <p class="country__row"><span>💰</span>${currencies[0].name}</p>
  </div>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
})
}

getCountryData('moldova');
getCountryData('italy');
getCountryData('germany');