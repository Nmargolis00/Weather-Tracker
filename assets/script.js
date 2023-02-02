// Declare Variables
let apiKey = "13a7b624431f355c13de07f31de5ddb4";
let latitude;
let longitude;
let city;
let apiURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
let search = [];
let buttonDisplay = document.querySelector(".prev-city");
let previousCities = JSON.parse(localStorage.getItem("search"));
let searchBtn = document.querySelector(".search-button");
let geoCodeAPI =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";

//Save user input

function saveData() {
  let cityEl = document.querySelector("#city-search").value;
  // console.log(cityEl);

  //only save if the city is not already in the array
  if (!search.includes(cityEl)) {
    search.push(cityEl);
    localStorage.setItem("search", JSON.stringify(search));
  }

  
makeButton(search);
}

// Create a button for the city

function makeButton(search) {
  for (let index = 0; index < search.length; index++) {
    let divButton = document.createElement("div");

    let cityButton = document.createElement("button");

    cityButton.setAttribute("class", "prev-city");

    cityButton.setAttribute("type", "button");

    cityButton.textContent = search[index];



    buttonDisplay.appendChild(divButton);
    divButton.appendChild(cityButton);
  }
}


// will need to encompass this as a larger function
searchBtn.addEventListener("click", saveData);

//Load Saved Cities

// loadCities();

// function loadCities (){

//     let previousCities = JSON.parse(localStorage.getItem('search'));
//     if(previousCities){
//         search = previousCities;
//     }
//     // makeButton(search); this will be a new function to create a button based on user input
// }

// Localstorage city names and maybe add in autocomplete
// Get longitude and latitude for each city
// plug into API key

//day.js for dates and future dates

// fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//   You can set the URL as a variable and then have the URL as a string so you can modify parts of IDBTransaction. This is how you would adjust for your search function

// Search a city and have it find the longitude and latitude of that city