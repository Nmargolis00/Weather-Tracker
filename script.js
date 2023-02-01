 
 // Declare Variables
 let apiKey = '13a7b624431f355c13de07f31de5ddb4'
 let latitude;
 let longitude;
 let city;
 let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
 let search = [];
//  let cityEl = document.querySelector('#city-search');
 let previousCities = JSON.parse(localStorage.getItem('search'));
 let searchBtn = document.querySelector('.search-button');


//Save user input

function saveData(){
 
    let cityEl = document.querySelector('#city-search').value;
    console.log(cityEl);
     
        if(previousCities){
            search = previousCities;
        }
    
        if(search.includes(cityEl)){
            return;
        }
    
        //Way to confirm that it is a city
    
        search.push(cityEl);
        localStorage.setItem('search', JSON.stringify(search))
    
    
        
        //Make a button of that city

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