setDrinks();

function setDrinks() {
    drinks = localStorage.drinks;
    ptag = document.querySelector(".drinks-card p");

    if (drinks == null) {
        ptag.innerHTML = "You haven't had any recent orders!"
    }
    else {
        ptag.innerHTML = `You have submitted a total of ${drinks} recent order(s).`;
    }
}