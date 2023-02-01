 
 // Declare Variables
 let apiKey = 13a7b624431f355c13de07f31de5ddb4
 let latitude;
 let longitude;
 let city;
 let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
 let search = [];

// fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//   You can set the URL as a variable and then have the URL as a string so you can modify parts of IDBTransaction. This is how you would adjust for your search function

// Search a city and have it find the longitude and latitude of that city