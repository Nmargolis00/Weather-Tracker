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

  loadData();
  //load saved cities
  function loadData() {
    let search = [];
    var savedCities = JSON.parse(localStorage.getItem("search"));
    if (savedCities) {
      search = savedCities;
    }
    console.log(search);
    makeButton(search);
  }




  //Save user input

function saveData() {
  let cityEl = document.querySelector("#city-search").value;
  // console.log(cityEl);

  //only save if the city is not already in the array
  if (!search.includes(cityEl)) {
    search.push(cityEl);
    localStorage.setItem("search", JSON.stringify(search));
    console.log(search);
  }

  makeButton(search);
}

// Create a button for the city

function makeButton(search) {
  buttonDisplay.innerHTML = "";

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

console.log(search);

//Find longitude and latitude


function getCoordinates(cityEl) {
  let geoCodeAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${cityEl},US&limit=1&appid=${apiKey}`;

  console.log(search);

  fetch(geoCodeAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        let latitude = data[0].lat;
        let longitude = data[0].lon;
        console.log('lat: ' + latitude, 'long: ' + longitude);
        console.log(data[0]);
        let city = data[0].name;
      
        let weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

        fetch(weatherAPI)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data.list[0]);
          let today = dayjs()
          
          console.log(today)
          let weatherIcon = data.list[0].weather[0].icon
          let weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}.png`
          let iconDescription = data.list[0].weather[0].description
          let forecast = $(`
          <div>
          <h2>${city}  ${today.format('dddd, MMM D, YYYY')}</h2>
          <div>
          <img src="${weatherIconURL}" alt="${iconDescription}"/>
          </div>
          <p>Wind Speed: ${data.list[0].wind.speed}</p>
          <p>Temperature: ${data.list[0].main.temp}</p>
          <p>Humidity: ${data.list[0].main.humidity}</p>
          </div>
          `)
        $('.current-city-data').append(forecast);
        })
      
      
        let fiveDayAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

        fetch(fiveDayAPI)
        .then(function(response){
          return response.json();
        })
        .then(function(data){

         
        
let fiveDayArray = data.list.filter(day=>day.dt_txt.includes('12:00:00'))

        for (let index = 0; index < fiveDayArray.length; index++) {

          let currentDate = new Date(fiveDayArray[index].dt_txt).toLocaleString().split(",")[0];
          let weatherIcon = fiveDayArray[index].weather[0].icon
          let weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}.png`
          let iconDescription = data.list[0].weather[0].description

          let fiveDayForecast = $(`
          <div class="card" style="width: 17rem">
          <h5 class="card-title">${cityEl}, ${currentDate} </h5>
          <img class = "weather-image" src="${weatherIconURL}" alt="${iconDescription}"/>
        <div class="card-body">
          <p>Wind Speed: ${fiveDayArray[index].wind.speed} mph</p>
          <p>Temperature: ${fiveDayArray[index].main.temp} degrees</p>
          <p>Humidity: ${fiveDayArray[index].main.humidity} %</p>
          
        </div>
          `)
        $('.fiveday-section').append(fiveDayForecast);
          
        }
      });
    });
  

}


var allCityButtons = document.querySelectorAll(".prev-city");
allCityButtons.forEach(function (each) {
  console.log(each);
  each.addEventListener("click", function (event) {
    let cityName = event.target.textContent;
    console.log(cityName);
    getCoordinates(cityName);
    
  });
});




// will need to encompass this as a larger function
searchBtn.addEventListener("click", function () {
  saveData();
  getCoordinates(search[search.length - 1]);
});
cityButton.addEventListener("click", getCoordinates());

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
