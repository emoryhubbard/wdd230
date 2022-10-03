let date = new Date();
let year = date.getFullYear();

function padWithZeroes(number, zeroQuantity) {
  return number.toString().padStart(zeroQuantity, '0');
}

let lastModified = new Date(document.lastModified);
let modDay = lastModified.getDate();
let modMonth = padWithZeroes(lastModified.getMonth() + 1, 2);
let modYear = lastModified.getFullYear();
let modHour = padWithZeroes(lastModified.getHours(), 2);
let modMinute = padWithZeroes(lastModified.getMinutes(), 2);
let modSecond = padWithZeroes(lastModified.getSeconds(), 2);

document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 `
+ `Last Updated: ${modMonth}/${modDay}/${modYear} ${modHour}:${modMinute}:${modSecond}`;