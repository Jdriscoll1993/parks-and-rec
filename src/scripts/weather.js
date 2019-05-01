
//weather function fetches weather data. It has 3 parameters. The key is to make our token or api key annonymous so its defined by a variable in apiKey.js --this file must be in .gitignore so nobody can see the private key.
const weather = (key, latitude, longitude) => {
    //the parameters are used in the URL by string interpolation.
    return fetch(
      `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
    )
    //the data from the fetch call is passed to the .json function and parses the data out as a javascript object.
    .then (response => response.json())
}