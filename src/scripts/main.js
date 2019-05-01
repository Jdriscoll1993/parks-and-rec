// let printedEvents = [];
// let meetData = document.querySelector("#getData");
// //set up eventListener function to query select the input in this case its id is meet

// let myInput = document.querySelector("#parks").value;
// //.value pulls the text out of an input
// //call meetupData function with a parameter of the targeted id of the input (from the line above)
// fetchParks(myInput);
// console.log(myInput);

// let containerEl = document.querySelector("#container");
// function fetchParks() {
//   fetch(
//     "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json",
//     {
//       headers: {
//         Accept: "application/json"
//       }
//     }
//   )
//     .then(res => res.json())
//     // everything in this block of code below assumes the were doing something with the data
//     .then(data => {
//       containerEl.innerHTML = "";
//       data.parks.forEach(park => {
//         printedEvents.push(park);
//         if (park.visited === true) {
//           containerEl.innerHTML += createNewPark(park);
//           console.log("true");
//         } else {
//           containerEl.innerHTML += createVisitedPark(park);
//         }
//         console.log(containerEl);
//       });

//       console.log(printedEvents);
//     });
// }
// function createNewPark(parks) {
//   return `<div class ="newHere">AIN'T BEEN HERE!</div><div class="greenSolid"><h3>${
//     parks.name
//   }</h3><p>${parks.state}</p></div>`;
// }

// function createVisitedPark(parks) {
//   return `<div class ="beenHere">IVE ALREADY BEEN HERE!</div><div class="redDash"><h3>${
//     parks.name
//   }</h3><p>${parks.state}</p></div>`;
// }


// // fetch park data from an external api. then using that data fetch weather data