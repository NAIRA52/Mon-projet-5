// let teddies2;
fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(teddies => {
        console.log(teddies);
        printProducts(teddies);
        //teddies2 = teddies;
    });
//console.log("apres fetch");
//console.log(teddies2);

function printProducts(products) {
    let listOfProducts = "";

    products.forEach(prod =>
        listOfProducts += ` 
      <tr class="text-left bg-dark text-light " id="${prod._id}">
        <td class="w-25"><img src=${prod.imageUrl} class="img-fluid img-thumbnail w-75" id="myImg"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-25 align-middle"><a id="view" href="../front/product.html?id=${prod._id}" class="view-cart btn btn-info">Voir</a></td>
      </tr>   
      `
    );
    document.getElementById('productList').innerHTML = listOfProducts;

};