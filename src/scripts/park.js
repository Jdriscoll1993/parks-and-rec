//declare function to get park data

// //signiture of a function: name, arguments,
// functions either take input and give output or take inpout and modify something in our system

//delcare a function to fetch data
const getParkData = () => {
  // fetch url to access park data
  fetch(
    "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
  )
    // .then is a function that has a parameter which is a function, and we're calling its parameter (response) Its parameter 'response' is a function that passes the data from the api which is then passed to the .json function (turns api data into a javascript object)
    .then(response => response.json())
    //parkData is our object that we're getting back from .json method.
    .then(function (parkData) {
      //parkData is the new object name of all the data that we just fetched. parks is the name of the array (within the data) and parkData encompasses that array within itself. It could very well have multiple arrays with objects in them.
      //each object is iterated over in the parks array.
      parkData.parks.forEach(park => {
        // create variables to store the respective data that we want from the objects within the parks array.
        let parkName = park.name;
        let parkState = park.state;
        let parkVisit = park.visited;
        //weather function is called-- it is declared in weather.js
        weather(key, park.latitude, park.longitude)
        //continuing from weather.js
        //.then function recieves a function as its parameter that has a parameter of weatherData.
        //the parameter to each .then is a callback function. callback functions --pass in as arguments to other functions. we dont call them.
          .then(function (weatherData) {
          let current = weatherData.currently.summary;
          let today = weatherData.hourly.summary;
          let week = weatherData.daily.summary;
          parkDomBuilder(parkName, parkState, parkVisit, current, today, week);
        });
      });
    });
};
getParkData();


//methods are properties of objects. --function inside of an object