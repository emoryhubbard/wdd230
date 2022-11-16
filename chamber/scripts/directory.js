var members = null;

initializeMembers();
setViewToGrid();
setIconListeners();

function initializeMembers() {
    const requestURL = 'json/members.json';
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);
            members = jsonObject['members'];
            printMembers();
            displayMemberCards();
        });
}

function printMembers() {
    members.map(printMember);
}

function printMember(member) {
    console.log(member.name);
}

function displayMemberCards() { 
    const cards = document.querySelector('.cards');
    removeChildren(cards);
    members.map(displayMemberCard);
}

function removeChildren(parent) {
    while (parent.firstChild != null) {
        parent.removeChild(parent.firstChild);
    }
}

function displayMemberCard(member) {
    const card = document.createElement('section');
    
    const icon = document.createElement('img');
    const h2 = document.createElement('h2');
    const addressElement = document.createElement('p');
    const telElement = document.createElement('p');
    const siteElement = document.createElement('a');

    h2.textContent = member.name;
    addressElement.textContent = member.address;
    telElement.textContent = member.tel;
    siteElement.textContent = member.siteURL;
    siteElement.href = member.siteURL;

    icon.setAttribute('src', member.iconURL);
    icon.setAttribute('alt', `Icon of ${member.name}`);
    //icon.setAttribute('loading', 'lazy');

    card.appendChild(icon);
    card.appendChild(h2);
    card.appendChild(addressElement);
    card.appendChild(telElement);
    card.appendChild(siteElement);

    document.querySelector('div.cards').appendChild(card);
}

function setViewToGrid() {
    const gridIcon = document.querySelector('.grid-icon');
    gridIcon.style.border = "5px solid #4a5568";
}

function setIconListeners() {
    const gridIcon = document.querySelector('.grid-icon');
    gridIcon.addEventListener("click", selectView);
    const listIcon = document.querySelector('.list-icon');
    listIcon.addEventListener("click", selectView);
}

function selectView(e) {
    clearBorder(document.querySelector('.grid-icon'));
    clearBorder(document.querySelector(".list-icon"));
    const icon = e.target;
    icon.style.border = "5px solid #4a5568";
    console.log(icon.classList);

    if (icon.classList[0]=='grid-icon') {
        displayMemberCards();
    } else {
        displayMemberRows();
    }
}
function clearBorder(img) {
    img.style.border = "5px solid transparent";
}

function displayMemberRows() {
    const cards = document.querySelector('.cards');
    removeChildren(cards);
    const table = document.createElement('table');
    const body = document.createElement('tbody');
    table.appendChild(body);
    cards.appendChild(table);
    members.map(displayMemberRow);
}

function displayMemberRow(member) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const address = document.createElement('td');
    const tel = document.createElement('td');
    const site = document.createElement('td');
    const siteAnchor = document.createElement('a');
    name.innerHTML = member.name;
    address.innerHTML = member.address;
    tel.innerHTML = member.tel;
    siteAnchor.innerHTML = member.siteURL;
    siteAnchor.href = member.siteURL;
    site.appendChild(siteAnchor);

    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(tel);
    row.appendChild(site);

    const table = document.querySelector('tbody');
    table.appendChild(row);
}