setDropdown();

function setDropdown() {
    document.querySelector(".burger-button").addEventListener("click",
        function (e) {
            button = e.target;
            symbol = button.innerHTML;

            if (symbol=="☰") {
                openDropdown();
            }
            else {
                closeDropdown();
            }
        });
}

function openDropdown() {
    const dropdown = document.querySelector(".dropdown-nav");
    dropdown.style.display = "block";

    const button = document.querySelector(".burger-button");
    button.innerHTML = "X";
}

function closeDropdown() {
    const dropdown = document.querySelector(".dropdown-nav");
    dropdown.style.display = "none";

    const button = document.querySelector(".burger-button");
    button.innerHTML = "☰";
}