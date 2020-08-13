// Creation d'une fonction pour recuperer les produits du localstorage dans mon panier
function basketCart() {
    // Recuperer les donnees dans le localstorage
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log(cartItems)
        // Recuperer les données du prix total
    let cartTotaly = localStorage.getItem("totalyPrice");
    console.log(cartTotaly)
        // Identification l'id html où le tableau va être vu
    let tableTitle = document.getElementById("table-body");
    // Identification de l'id html où le prix total va être vu
    let tableBody = document.getElementById("finally-command");
    //Creation d'une condition ,on ajoute les donnees du produit et le prix total
    if (cartItems && cartTotaly) {
        // On va parcourir le tableau et recuperer les informations et les afficher sur le DOM(page web)
        cartItems.forEach(item => {
            // On rajoute le code html sous l'id"table-body"
            tableTitle.innerHTML += `
            <tr class="text-center bg-dark text-light ${item.id}">
            <td><ion-icon name="close-circle-outline"></ion-icon></td>
            <td class="w-25"><img src=${item.imageUrl} class="img-fluid img-thumbnail " id="myImg"></td>
            <td class="w-10 align-middle">${item.name}</td>
            <td class="w-10 align-middle">${item.colors}</td>
            <td class="w-10 align-middle">${item.select}</td>
            <td class="w-10 align-middle">${item.qty}</td>
            <td class="w-10 align-middle">${item.price}€</td>
            <td class="w-10 align-middle">${item.select*item.qty*item.price},00€</td>
            </tr>`
        });
        //on rajoute le code HTML sous l'id "finally-command"
        tableBody.innerHTML += `
            <p class="border border-success">Total de la commande: <span class="Total">${cartTotaly}</span>€</p>`
    }
}
basketCart()