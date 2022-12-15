
const fruits = {};
setForm(fruits);
addSubmitListener(fruits);

async function setForm(fruits) {
    const url = `https://brotherblazzard.github.io/canvas-content/fruit.json`;

    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        initializeFruits(fruits, data);
        populateFormOptions(data);
    } else {
        console.log("Error encountered " +
            "while retrieving fruit options: " + response.text());
    }
 }

 function initializeFruits(fruits, data) {
    data.map(function (current) {
        fruits[current.name] = current;
    });
    console.log(fruits);
 }

 function populateFormOptions(data) {
    const names = [];
    addNames(names, data);
    addOptions(names)
 }

 function addNames(names, data) {
    data.map(function (current) {
        names.push(current.name);
    });
 }

 function addOptions(names) {
    const selectTags = Array.from(document.querySelectorAll("select"));
    
    names.map(function (currentName) {
        selectTags.map(function (currentTag){
            const option = document.createElement("option");
            option.innerHTML = currentName;
            option.value = currentName;
            currentTag.appendChild(option);
        });
    });
 }

 function addSubmitListener(fruits) {
    const button = document.querySelector(".submitButton");
    button.addEventListener(function (e) {
        
    });
 }