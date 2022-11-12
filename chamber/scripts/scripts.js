var images =[]; //global variables for lazy loading callback
var observer;

setDate();
setCopyright();
setUpdate();
setLastVisit();
displayBanner();
//debugEventBox();
initializeImages();
lazyLoad();
//testSetSrcset();

/*function testSetSrcset() {
    image = document.querySelector(".pic-test");
    image.srcset = image.getAttribute("data-src");
}*/

/*function debugEventBox() {
    const mainDivs = document.querySelectorAll("main>div");
    const eventBoxes = document.querySelectorAll(".yada");

    console.log(mainDivs);
    console.log(eventBoxes);
}*/

function setDate() {
    let today = new Date();
    let todayDay = today.getDate();
    let todayDayName = getDayName(today.getDay()+1);
    let todayMonthName = getMonthName(today.getMonth()+1);
    let todayYear = today.getFullYear();

    document.querySelector("#date-div p").innerHTML =
    `${todayDayName}, ${todayDay} ${todayMonthName} ${todayYear}`;
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

function padWithZeroes(number, zeroQuantity) {
  return number.toString().padStart(zeroQuantity, '0');
}

function setLastVisit() {
    if (localStorage.lastVisitTimeStamp == null)
        localStorage.lastVisitTimeStamp = new Date().getTime();
    timeStamp = new Date().getTime();

    deltaTimeMilliseconds =
        timeStamp - parseInt(localStorage.lastVisitTimeStamp);
    deltaTimeSeconds = deltaTimeMilliseconds / 1000;
    deltaTimeMinutes = deltaTimeSeconds / 60;
    deltaTimeHours = deltaTimeMinutes / 60;
    deltaTimeDays = Math.round(deltaTimeHours / 24);
    console.log(`${deltaTimeSeconds}`);

    const lastVisit = document.querySelector("#last-visit");
    lastVisit.innerHTML = `${deltaTimeDays}`;
    localStorage.lastVisitTimeStamp = timeStamp;
}

function displayBanner() {
    let today = new Date();
    let todayDayName = getDayName(today.getDay()+1);
    if (todayDayName == "Monday" || todayDayName == "Tuesday") {
        document.querySelector(".banner").style.display = "block";
    }
}
function initializeImages() {
    let imageNodeList = document.querySelectorAll("img[data-src]");
    images = Array.from(imageNodeList);
}
function lazyLoad() {
   if ("IntersectionObserver" in window) {
        loadWhileScrolling();
    }
    else {
        loadAfterPage();
    }
}
function loadWhileScrolling() {
    observer = new IntersectionObserver(checkForIntersections);
    images.map(observeImage);
}
function checkForIntersections(events, observer) {
    events.map(respondToIntersection);
}
function respondToIntersection(e) {
    image = e.target;
    if (e.isIntersecting) {
        console.log("image intersecting and loading")
        loadImage(image);
        observer.unobserve(image);
    }
}
function observeImage(image) {
    observer.observe(image);
}
function loadAfterPage() {
    images.map(loadImage);
}
function loadImage(image) {
    image.src = image.getAttribute("data-src"); //can't access .data-src directly
    image.onload = unblurImage;      //since it has a hyphen
    
}
function unblurImage(e) {
    image = e.target;
    image.classList.add("unblur");
}

function openDropDown() {
    document.querySelector(".drop-down").style.display = "block";
}

function closeDropDown() {
    document.querySelector(".drop-down").style.display = "none";
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





