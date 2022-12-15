
const fruits = {};
setForm(fruits);
addFormHanlder(fruits);

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

 function addFormHanlder(fruits) {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        ds(".cfirst-name").innerHTML= ds(".first-name").value;
        ds(".cemail").innerHTML= ds(".email").value;
        ds(".cphone").innerHTML= ds(".phone").value;
        ds(".cfruit1").innerHTML= ds(".fruit1").value;
        ds(".cfruit2").innerHTML= ds(".fruit2").value;
        ds(".cfruit3").innerHTML= ds(".fruit3").value;
        ds(".cinstructions").innerHTML= ds("textarea").value;

        const nutritions = [fruits[ds(".fruit1").value].nutritions,
        fruits[ds(".fruit2").value].nutritions,
        fruits[ds(".fruit3").value].nutritions];

        const tn = {"carbohydrates": 0, "protein": 0,
            "fat": 0, "sugar": 0, "calories": 0};
        addNutritions(tn, nutritions);
        ds(".ccarbohydrates").innerHTML= tn.carbohydrates;
        ds(".cprotein").innerHTML= tn.protein;
        ds(".cfat").innerHTML= tn.fat;
        ds(".csugar").innerHTML= tn.sugar;
        ds(".ccalories").innerHTML= tn.calories;
        
        document.querySelector(".form-card").style.display = "none";
        document.querySelector(".confirm-card").style.display = "block";
        addDrinkToLocalStorage();
    });
 }
 function addNutritions(tn, n) {
    n.map(function (c) {
        tn["carbohydrates"] = tn["carbohydrates"] + c.carbohydrates;
        tn["protein"] = tn["protein"] + c.protein;
        tn["fat"] = tn["fat"] + c.fat;
        tn["sugar"] = tn["sugar"] + c.sugar;
        tn["calories"] = tn["calories"] + c.calories;
    });
 }
 /*            <div class="confirm-card">
                <h2>Order Info</h2>
                <p>Emory</p>
                <p>randomemail@gmail.com</p>
                <p>(123) 454-4747</p>
                <p>12/14/2022</p>
                <h2>Order Instructions</h2>
                <p>Apple</p>
                <p>Blueberry</p>
                <p>Tomato</p>
                <h2>Nutrition Facts</h2>
                <p><span>80</span>g Carbohydrates</p>
                <p><span>10</span>g Protein</p>
                <p><span>5</span>g Fat</p>
                <p><span>10</span>g Sugar</p>
                <p><span>200</span> Calories</p>
            </div>*/

function ds(selector) {
    return document.querySelector(selector);
}
function addDrinkToLocalStorage() {
    if (localStorage.drinks==null) {
        localStorage.drinks = 1;
    }
    else {
        localStorage.drinks = parseInt(localStorage.drinks) + 1;
    }
}

