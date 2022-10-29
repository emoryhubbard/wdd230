setWindChill();

function setWindChill() {
    const temp = parseFloat(document.querySelector("#tvalue").innerHTML);
    const speed = parseFloat(document.querySelector("#svalue").innerHTML);
    const chillElement = document.querySelector("#cvalue");

    chillElement.innerHTML = getChill(temp, speed);
}

function getChill(temp, speed) {
    let chill = "N/A";

    if (temp <= 50 && speed > 3) {
        value = 35.74 + 0.6215 * temp - 32.75 * Math.pow(speed, 0.16)
            + 0.4275 * temp * Math.pow(speed, 0.16);
        chill = `${Math.round(value)}°F`
    }

    return chill;
}