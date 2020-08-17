// Renvoi les informations de l'URL
let url = window.location.href;
console.log(url);
// Creation de la nouvelle URL
let parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));
// Analyser les parametres de l' id
let id = parsedUrl.searchParams.get("id");
//recuperation des informations de l'api
fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(teddy => {
        printProduct(teddy);
        addProductEvent(teddy);
    });
// Creation de la fonction qui construit le produit 
function printProduct(product) {
    let productElt = document.getElementById("product");
    let colorSelectElt = document.getElementById("color");
    let blockSelect = document.getElementById("blockSelect");
    // Ajout des descriptions dans la page web
    let blockElt = document.createElement('div');
    let blockLeftElt = document.createElement('div');
    let imageUrlElt = document.createElement("img");
    let blockRightElt = document.createElement('div');
    let nameElt = document.createElement("h2");
    let priceElt = document.createElement("p");
    let euroElt = document.createElement("span");
    let descriptionElt = document.createElement("p");
    //Attribution des elements 
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
        let colorElt = document.createElement('option');
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
    blockRights.append(blockSelect);
}
// Creation d'une fonction qui permet le fonctionnement du "bouton"
function addProductEvent(product) {
    // Creation de l'objet "bouton"
    let buttonElt = document.querySelector('#add-to-cart');
    // Appel des fonctions au clic du "bouton"
    buttonElt.addEventListener('click', () => {
        cartNumbers(product);
        addItem(product);
        totalCost(product);
    });
}

//Fonction qui permet de garder le nombre dans l'icone panier au rechargement de la page
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
//rajouter dans l'icone panier
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}
// Creation d'une fonction pour les produits dans le localstorage
function addItem(product) {
    // Recuperer les donnees dans le localstorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Creation d'une variable avec les elements que je souhaite afficher
    let newProduct = {
        id: id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        colors: color.value,
        select: select.value,
        qty: 1,
        //le prix total de chaque produit
        //total: product.price * select.value * 1,
    };
    // Creation d'une variable pour que mon produit ne soit pas doubler
    let productAlReadyInCart = false;
    // Je boucle tout les produits
    for (let i = 0; i < cart.length; i++) {
        //Si l'id = "newPoduct.id" et colors = newProduct.colors ,un nouveau produit se crée si l'id et la couleur changent
        if (cart[i].id === newProduct.id && cart[i].colors === newProduct.colors) {
            console.log("le produit existe deja");
            productAlReadyInCart = true;
            // On ajoute la quantité au produit qui existe deja
            cart[i].qty += newProduct.qty;
            cart[i].select = newProduct.select;
            cart[i].price = newProduct.price;
            //cart[i].total = newProduct.total;
        }
    }
    //Si le produit n'existe pas , on rajoute un nouveau au panier
    if (productAlReadyInCart === false) {
        // J'ajoute l'element "cart" à l'element "newProduct"
        cart.push(newProduct);
    }
    //Je stock les nouvelles donnees
    localStorage.setItem("cart", JSON.stringify(cart));
    //une fenêtre alert apparait lorsqu'on ajoute un produit dans le panier
    alert("Vous avez ajouté ce produit dans votre panier: " + product.name)
    console.log(cart)
}
//Creation d'une fonction pour la somme finale
function totalCost(product) {
    // Creation de la variable dans le localstorage
    let cartCost = localStorage.getItem("totalyPrice");
    if (cartCost != null) {
        console.log(cartCost)
            // je transforme la variable en nombre(number)
        cartCost = parseInt(cartCost);
        //Stockage la somme final en calculant le prix multiplier avec le selecteur nombre multiplier avec la quantité de chaque produit
        localStorage.setItem("totalyPrice", cartCost + product.price * select.value * 1);
    } else {
        // Stockage la somme final des produits selectionne
        localStorage.setItem("totalyPrice", product.price);
    }
}