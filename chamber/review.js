//other hard things to review: lazy loading
//(intesrsection observer and other methods),
//responsive images (picture element)

const myElement = document.querySelector("myClass");
myElement.style.color = "red";
myElement.innerHTML = "New text content";
myElement.src = "imagePath";
myElement.onload = coolEffect;
myElement.classList.add("anotherClass");
const datasrc = image.getAttribute("data-src"); // used b/c hyphen
myElement.addEventListener("click", myFunction);
const e = "pretendItsAnEventInACallback";
const anotherElement = e.target;

myElement.appendChild(document.createElement("p"));
const nodes = myElement.childNodes;
const moreNodes = document.querySelectorAll("anotherClass");

const nodesArray = Array.from(nodes);
const moreNodesArray = Array.from(moreNodes);

nodesArray.map(processNode);
nodesArray.filter(filterEachElementMustPass);
nodesArray.reduce(addUpWithEachNode);

function myFunction();
//                      entity        html   css   javascript   unicode
//unicode in javascript copyright	&#169	\00A9 \u00A9        U+00A9	Copyright Sign"
//                             named   dec   hex
//unicdoe in html extended:    &copy; &#169; &#xA9;

console.log('\u00A9');

function coolEffect() {
    
}
function processNode() {

}
function filterEachElementMustPass() {

}
function addUpWithEachNode() {

}
//main things you need:
//async function
//fectch(url) in the form of await fetch
//response.ok
//response.json()
//response.text()
async function setPageData() {
    const url = "myapi.com";
    const response = await fetch(url);
    if (response.ok) {
        const data = response.json();
        console.log(data);
    } else {
        console.log("Something went wrong: " + response.text());
    }
}
//key functions/things:
//("IntersectionObserver in window")
//new Intersection Observer(respondCallback)
//image.onload
//e.isIntersecting
//the idea of swapping data-src for src
//unobserve(image)
function lazyLoad() {
    const supportsLazy = False;
    if ("IntersectionObserver" in window) {
        supportsLazy = True;
    }
    if (supportsLazy) {
        observer = new IntersectionObserver(respondToIntersections);
    }
    else {
        image.src = image.getAttribute("data-src");
        image.onload = unblurImage;
    }
}

function respondToIntersections(events, observer) {
    events.map(function (e) {
        image = e.target;
        if (e.isIntersecting) {
            image.src = image.getAttricture("data-src");
            image.onload = unblurImage;
            observer.unobserve(image);
        }
    });
}

function ublurImage(e) {
    image = e.target;
    image.classList.add("unblur");
}


