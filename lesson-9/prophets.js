var prophets = "";

initializeProphetsObject();

function initializeProphetsObject() {
    const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);
            prophets = jsonObject['prophets'];
            printProphets();
            displayProphets();
        });
}

function printProphets() {
    prophets.map(printProphet);
}

function printProphet(prophet) {
    console.log(prophet.name);
}

function displayProphets() { 
    prophets.map(displayProphet);
}

function displayProphet(prophet) {
    const card = document.createElement('section');
    const h2 = document.createElement('h2');
    const dateElement = document.createElement('h3');
    const placeElement = document.createElement('h3');
    const portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dateElement.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeElement.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(dateElement);
    card.appendChild(placeElement);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}