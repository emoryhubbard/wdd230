let date = new Date();
let year = date.getFullYear();

document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 Maryland`;

function padWithZeroes(number, zeroQuantity) {
  return number.toString().padStart(zeroQuantity, '0');
}

let lastModified = new Date(document.lastModified);
let modDay = lastModified.getDate();
let modMonth = lastModified.getMonth() + 1;
let modYear = lastModified.getFullYear();
let modHour = padWithZeroes(lastModified.getHours(), 2);
let modMinute = padWithZeroes(lastModified.getMinutes(), 2);
let modSecond = padWithZeroes(lastModified.getSeconds(), 2);

document.getElementById("update-line").innerHTML =
  `Last Update: ${modMonth}/${modDay}/${modYear} ${modHour}:${modMinute}:${modSecond}`;
