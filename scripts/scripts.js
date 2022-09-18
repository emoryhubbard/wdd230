let date = new Date();
let year = date.getFullYear();

document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 Maryland`;

let lastModified = new Date(document.lastModified);
let modDay = lastModified.getDay();
let modMonth = lastModified.getMonth();
let modYear = lastModified.getFullYear();
let modHour = lastModified.getHours();
let modMinute = lastModified.getMinutes();
let modSecond = lastModified.getSeconds();

document.getElementById("update-line").innerHTML =
  `Last Updated: ${modMonth}/${modDay}/${modYear} ${modHour}:${modMinute}:${modSecond}`
