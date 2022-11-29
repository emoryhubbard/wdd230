setSpotlights();

function setSpotlights() {
    const requestURL = 'json/members.json';
    
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);
            members = jsonObject['members'];
            displaySpotlights(members);
        });
}

function displaySpotlights(members) {
    let count = 0;
    const maxCount = 3;
    const indices = [];

    while (count != maxCount) {
        const randIndex = Math.round(Math.random() * (members.length - 1));
        
        if (indices.indexOf(randIndex) == -1) {
            indices.push(randIndex);
            count++;
            displaySpotlight(members[randIndex], count);
        }
    }

function displaySpotlight(member, position) {
    const spotlight = ".spotlight" + position;
    const h2 = document.querySelector(`${spotlight} h2`);
    const img = document.querySelector(`${spotlight} img`);
    const site = document.querySelector(`${spotlight} .tag-line`);
    const email = document.querySelector(`${spotlight} .email`);
    const phone = document.querySelector(`${spotlight} .phone`);

    h2.innerHTML = member.name;
    img.src = member.iconURL;
    img.alt = member.iconURL;
    site.innerHTML = `<a>${member.siteURL.slice(8)}</a>`;
    const a = document.querySelector(`${spotlight} .tag-line a`);
    a.href = member.siteURL;
    email.innerHTML = "info@" + member.siteURL.slice(8);
    phone.innerHTML = member.tel;
}

}