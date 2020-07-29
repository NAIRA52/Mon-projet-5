let url = window.location.href;
console.log(url);
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));


let id = parsedUrl.searchParams.get("id");

fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(teddy =>
        console.log(teddy))

let productElt = document.getElementById("product");
let colorSelectElt = document.getElementById("color");
let blockSelect = document.getElementById("blockSelect");
let buttons = document.getElementById("buttons");
/* Accès aux informations de l'api*/
ajaxGet("http://localhost:3000/api/teddies/" + id, function(response) {
    let product = JSON.parse(response);
    // Ajout des descriptions dans la page web
    let blockElt = document.createElement('div');
    let blockLeftElt = document.createElement('div');
    let imageUrlElt = document.createElement("img");
    let blockRightElt = document.createElement('div');
    let nameElt = document.createElement("h2");
    let priceElt = document.createElement("p");
    let euroElt = document.createElement("span");
    let descriptionElt = document.createElement("p");
    /*Attribution des elements*/
    blockElt.setAttribute('class', 'block m-5 bg-dark text-light');
    blockLeftElt.setAttribute('class', 'blockLeft p-5 col-md-6 mb-4');
    imageUrlElt.src = product.imageUrl;
    imageUrlElt.setAttribute('class', 'imageUrl style=100%');
    blockRightElt.setAttribute('class', 'blockRight p-5');
    blockRightElt.setAttribute('id', 'blockRights');
    nameElt.textContent = product.name;
    priceElt.textContent = product.price;
    euroElt.textContent = ('€');
    descriptionElt.textContent = product.description;
    /*Option couleur*/
    product.colors.forEach(color => {
        let colorElt = document.createElement("option");
        colorElt.innerHTML = color;
        colorSelectElt.appendChild(colorElt);
    });
    /*Element suivi d'un autre*/
    productElt.appendChild(blockElt);
    blockElt.appendChild(blockLeftElt);
    blockLeftElt.appendChild(imageUrlElt);
    blockElt.appendChild(blockRightElt);
    blockRightElt.appendChild(nameElt);
    blockRightElt.appendChild(priceElt);
    priceElt.appendChild(euroElt);
    blockRightElt.appendChild(descriptionElt);
    blockRights.append(blockSelect, buttons);
});
/* fonction du button*/
document.getElementById("buttons").addEventListener("click", function(response) {

    localStorage.setItem("product", id);
    alert("Votre produit est sauvegardé.");
}, false);