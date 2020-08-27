// Renvoi les informations de l'URL
let url = window.location.href;
//console.log(url);
// Creation de la nouvelle URL
let parsedUrl = new URL(window.location.href);
//console.log(parsedUrl.searchParams.get("id"));
// Analyser les parametres de l' id
let id = parsedUrl.searchParams.get("id");
//recuperation des informations de l'api
fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(teddy => {
        console.log(teddy)
        printProduct(teddy);
        addProductEvent(teddy);
    });
// Creation de la fonction qui construit le produit 
function printProduct(product) {
    let productElt = document.getElementById("product");
    let colorSelectElt = document.getElementById("color");
    let blockSelect = document.getElementById("blockSelect");
    // Création des éléments dans la page web
    let blockElt = document.createElement('div');
    // La partie gauche du block
    let blockLeftElt = document.createElement('div');
    let imageUrlElt = document.createElement("img");
    // La partie droite du block
    let blockRightElt = document.createElement('div');
    let nameElt = document.createElement("h2");
    let priceElt = document.createElement("p");
    let euroElt = document.createElement("span");
    let descriptionElt = document.createElement("p");
    //Attribution des elements 
    blockElt.setAttribute('class', 'block m-5 bg-dark text-light');
    blockLeftElt.setAttribute('class', 'blockLeft p-5 col-md-6 mb-4');
    imageUrlElt.setAttribute('class', 'imageUrl');
    blockRightElt.setAttribute('class', 'blockRight p-5');
    blockRightElt.setAttribute('id', 'blockRights');
    // Afiichage des éléments de l'API dans les balises HTML
    imageUrlElt.src = product.imageUrl;
    nameElt.textContent = product.name;
    priceElt.textContent = product.price / 100;
    euroElt.textContent = ('€');
    descriptionElt.textContent = product.description;
    //On insére le tableau de couleur à l'intérieur du select color
    product.colors.forEach(color => {
        let colorElt = document.createElement('option');
        colorElt.innerHTML = color;
        colorSelectElt.appendChild(colorElt);
    });
    //Constuction du block product
    productElt.appendChild(blockElt);
    blockElt.appendChild(blockLeftElt);
    blockElt.appendChild(blockRightElt);
    // le block gauche
    blockLeftElt.appendChild(imageUrlElt);
    // le block droit
    blockRightElt.appendChild(nameElt);
    blockRightElt.appendChild(priceElt);
    blockRightElt.appendChild(descriptionElt);
    // introduction du logo € derriére le prix
    priceElt.appendChild(euroElt);
    // introduction du block select dans le block droit
    blockRightElt.append(blockSelect);
}
// Creation d'une fonction qui permet le fonctionnement du "bouton"
function addProductEvent(product) {
    // Creation de l'objet "bouton"
    let buttonElt = document.querySelector('#add-to-cart');
    // Appel des fonctions au clic du "bouton"
    buttonElt.addEventListener('click', () => {
        cartNumbers();
        addItem(product);
        totalCost(product);
    });
}
// Permettre de garder le nombre visible dans le panier au rechargement de la page
function loadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
//Rajouter dans l'icone panier le nombre de produit
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    // On convertit le string en nombre
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        //On stock la valeur dans le localStorage
        localStorage.setItem('cartNumbers', productNumbers + parseInt(select.value));
        //On identifie l'élément où celui-ci va être affiché
        document.querySelector('.cart span').textContent = productNumbers + parseInt(select.value);
    } else {
        // On stock la valeur en additionnant le nombre de quantité ajoutée
        localStorage.setItem('cartNumbers', parseInt(select.value));
        // on identifie l'élément où celui-ci va être affiché
        document.querySelector('.cart span').textContent = parseInt(select.value);

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
        price: product.price / 100,
        color: color.value,
        qty: parseInt(select.value)
    };
    console.log(newProduct);
    //console.log(select);
    //console.log(color);

    // Creation d'une variable pour que mon produit ne soit pas doubler
    let productAlReadyInCart = false;
    // Je boucle tout les produits
    for (let i = 0; i < cart.length; i++) {
        //Si l'id = "newPoduct.id" et color = newProduct.color,un nouveau produit se crée si l'id et la couleur changent
        if (cart[i].id === newProduct.id && cart[i].color === newProduct.color) {
            console.log("le produit existe deja");
            productAlReadyInCart = true;
            // On ajoute la quantité au produit qui existe deja
            cart[i].qty += newProduct.qty;
            cart[i].price = newProduct.price;
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
        //console.log(cart)
}
//Creation d'une fonction pour la somme finale
function totalCost(product) {
    // Creation de la variable dans le localstorage
    let cartCost = localStorage.getItem("totalPrice");
    if (cartCost != null) {
        //console.log(cartCost)
        // je transforme la variable en nombre(number)
        cartCost = parseInt(cartCost);
        //Stockage la somme final en calculant le prix multiplier avec le selecteur nombre multiplier avec la quantité de chaque produit
        localStorage.setItem("totalPrice", cartCost + product.price * select.value / 100);
    } else {
        // Stockage la somme final des produits selectionne
        localStorage.setItem("totalPrice", product.price * select.value / 100);
    }
}
loadCartNumbers()