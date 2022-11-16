//e2c86566d90dcbe864ff1270f6eb1f75

setCopyright();
setWeather();

function setCopyright() {
  let date = new Date();
  let year = date.getFullYear();

  document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 Maryland`;

  let lastModified = new Date(document.lastModified);
  let modDay = lastModified.getDate();
  let modMonth = lastModified.getMonth() + 1;
  let modYear = lastModified.getFullYear();
  let modHour = padWithZeroes(lastModified.getHours(), 2);
  let modMinute = padWithZeroes(lastModified.getMinutes(), 2);
  let modSecond = padWithZeroes(lastModified.getSeconds(), 2);

  document.getElementById("update-line").innerHTML =
    `Last Update: ${modMonth}/${modDay}/${modYear} ${modHour}:${modMinute}:${modSecond}`;
}

function padWithZeroes(number, zeroQuantity) {
  return number.toString().padStart(zeroQuantity, '0');
}

async function setWeather() {
  const lat = 64.837845;
  const long = -147.716675;
  const apiKey = "e2c86566d90dcbe864ff1270f6eb1f75";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${long}&appid=${apiKey}`;
  //const coordinatesURL = "http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks&units=imperial&appid=e2c86566d90dcbe864ff1270f6eb1f75";

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
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const desc = data.weather[0].description;
  
 
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
  
}
