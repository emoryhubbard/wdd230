setWeather();

async function setWeather() {
    const lat = 39.0398;
    const long = -76.993;
    const apiKey = "e2c86566d90dcbe864ff1270f6eb1f75";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${long}&appid=${apiKey}`;
    //const url = "http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks&units=imperial&appid=e2c86566d90dcbe864ff1270f6eb1f75";
    //^ URL to get city coordinates
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
 }
  
function displayResults(data) {
    const tempTag = document.querySelector('#tvalue');
    const speedTag = document.querySelector('#svalue');
    const icon = document.querySelector('.weather-icon');
    const cover = document.querySelector('.cover');
    const src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const coverText = capitalizeWords(data.weather[0].description);

   
    icon.setAttribute('src', src);
    icon.setAttribute('alt', coverText);
    cover.innerHTML = coverText;
    tempTag.innerHTML = data.main.temp.toFixed(0);
    speedTag.innerHTML = data.wind.speed.toFixed(1);
    setWindChill();
}
function capitalizeWords(text) {
    let oldWords = text.split(" ");
    let newText = "";

    for (let i=0; i<oldWords.length; i++) {
        const word = capitalize(oldWords[i]);
        newText += " " + word; //adds an initial space
    }
    newText = newText.slice(1); //removes initial space
    return newText;
}

function capitalize(word) {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
}

function setWindChill() {
    const temp = parseFloat(document.querySelector("#tvalue").innerHTML);
    const speed = parseFloat(document.querySelector("#svalue").innerHTML);
    const chillElement = document.querySelector("#cvalue");

    chillElement.innerHTML = getChill(temp, speed);
}

function getChill(temp, speed) {
    let chill = "N/A";
    console.log(`${temp} ${speed}`);
    if (temp <= 50 && speed > 3) {
        value = 35.74 + 0.6215 * temp - 32.75 * Math.pow(speed, 0.16)
            + 0.4275 * temp * Math.pow(speed, 0.16);
        chill = `${Math.round(value)}°F`
    }

    return chill;
}