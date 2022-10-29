
setDate();
setCopyright();
setUpdate();
displayBanner();
const h1 = document.querySelector("h1");
h1.innerHTML = document.querySelector("html").clientWidth;

function padWithZeroes(number, zeroQuantity) {
  return number.toString().padStart(zeroQuantity, '0');
}

function getMonthName(number) {
    month = "January";
    switch (number) {
        case 1: month="January";
        break;
        case 2: month="February";
        break;
        case 3: month="March";
        break;
        case 4: month="April";
        break;
        case 5: month="May";
        break;
        case 6: month="June";
        break;
        case 7: month="July";
        break;
        case 8: month="August";
        break;
        case 9: month="September";
        break;
        case 10: month="October";
        break;
        case 11: month="November";
        break;
        case 12: month="December";
    }
    return month;
}
function getDayName(number) {
    day = "Sunday";
    switch (number) {
        case 1: day = "Sunday";
        break;
        case 2: day = "Monday";
        break;
        case 3: day = "Tuesday";
        break;
        case 4: day = "Wednesday";
        break;
        case 5: day = "Thursday";
        break;
        case 6: day = "Friday";
        break;
        case 7: day = "Saturday";
        break;
    }
    return day;
}

function setCopyright() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("copyright").innerHTML = `&copy ${year} White Oak Chamber`;
}
function setUpdate() {
    let lastModified = new Date(document.lastModified);
    let modDay = lastModified.getDate();
    let modMonth = padWithZeroes(lastModified.getMonth()+1, 2);
    let modYear = lastModified.getFullYear();
    let modHour = padWithZeroes(lastModified.getHours(), 2);
    let modMinute = padWithZeroes(lastModified.getMinutes(), 2);
    let modSecond = padWithZeroes(lastModified.getSeconds(), 2);

    document.getElementById("update").innerHTML =
    `Last Updated: ${modMonth}/${modDay}/${modYear} ${modHour}:${modMinute}:${modSecond}`;
}

function setDate() {
    let today = new Date();
    let todayDay = today.getDate();
    let todayDayName = getDayName(today.getDay()+1);
    let todayMonthName = getMonthName(today.getMonth()+1);
    let todayYear = today.getFullYear();


    document.querySelector("#date-div p").innerHTML =
    `${todayDayName}, ${todayDay} ${todayMonthName} ${todayYear}`;
}

function openDropDown() {
    document.querySelector(".drop-down").style.display = "block";
}

function closeDropDown() {
    document.querySelector(".drop-down").style.display = "none";
}
function displayBanner() {
    let today = new Date();
    let todayDayName = getDayName(today.getDay()+1);
    if (todayDayName == "Monday" || todayDayName == "Tuesday") {
        document.querySelector(".banner").style.display = "block";
    }
}


/*main();

function main() {
    const elements = document.getElementsByTagName("a");
    const elArray = Array.from(elements);
    
    elArray.map(addHoverListener);
    console.log("here");
}
function addHoverListener(element) {
    element.addEventListener("mouseover", onHover);
}

function onHover(e) {
    e.target.backgroundColor = grey;
}*/





