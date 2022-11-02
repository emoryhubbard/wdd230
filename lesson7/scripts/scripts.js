var images =[];
var observer;

setCopyright();
initializeImages();
lazyLoad();

function setCopyright() {
    let date = new Date();
    let year = date.getFullYear();
    
    document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 Maryland`;
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
/*
function makeBorderGreen(image) {
    image.style.border = "2px solid green";
    image.setAttribute("on-load", "any");
}*/