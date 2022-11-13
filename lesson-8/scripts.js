
setCopyright();

function setCopyright() {
    let date = new Date();
    let year = date.getFullYear();
    
    document.getElementById("copyright-line").innerHTML = `&copy ${year} &#124 Emory D. Hubbard &#124 Maryland`;
}