//On récupére les informations de l'API
fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(teddies => {
        printProducts(teddies);
    });
//Création d'une fonction pour la structure du DOM
function printProducts(products) {
    let listOfProducts = "";
    //On va parcourir le tableau et recuperer les informations et les afficher sur le DOM(page web)
    products.forEach(prod =>
        listOfProducts += ` 
      <tr class="text-left bg-dark text-light " id="${prod._id}">
        <td class="w-25"><img src=${prod.imageUrl} class="img-fluid img-thumbnail w-75" id="myImg"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price/100}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-25 align-middle"><a id="view" href="../front/product.html?id=${prod._id}" class="view-cart btn btn-info">Voir</a></td>
      </tr>   
      `
    );
    //On identifie l'id pour l'affichage du tableau
    document.getElementById('productList').innerHTML = listOfProducts;

};