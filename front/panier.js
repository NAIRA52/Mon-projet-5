// Recuperer les donnees dans le localstorage pour la réalisation du tableau
let cartItems = JSON.parse(localStorage.getItem("cart"));
//console.log(cartItems)
// Recuperer les données du prix total
let cartTotal = localStorage.getItem("totalPrice");
//console.log(cartTotal)
// Identification l'id html où le tableau va être vu
let tableTitle = document.getElementById("table-body");
// Identification de l'id html où le prix total va être vu
let tableBody = document.getElementById("finally-command");
//Creation d'une condition ,on ajoute les donnees du produit et le prix total
if (cartItems && cartTotal) {
    // On va parcourir le tableau et recuperer les informations et les afficher sur le DOM(page web)
    cartItems.forEach(item => {
        // On rajoute le code html sous l'id"table-body"
        tableTitle.innerHTML += `
            <tr class="text-center bg-dark text-light ${item.id}">
            <td class="w-25"><img src=${item.imageUrl} class="img-fluid img-thumbnail " id="myImg"></td>
            <td class = "w-10 align-middle">${item.name}</td>
            <td class = "w-10 align-middle">${item.color}</td>
            <td class = "w-10 align-middle">${item.qty}</td>
            <td class="w-10 align-middle">${item.price}€</td>
            <td class="w-10 align-middle">${item.qty*item.price},00€</td>
        </tr>`
    });
    //on rajoute le code HTML sous l'id "finally-command"
    tableBody.innerHTML += `
            <p class="bg-success text-white p-2">Total de la commande: <span class="Total">${cartTotal}</span>€</p>`;
}
// on observe l'évenement "submit" au click de celui-ci
let form = document.querySelector("myForm");
myForm.addEventListener("submit", function(e) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let contact = { lastName, firstName, address, city, email };
    e.preventDefault();
    // Création de l'array products avec l'information ID du produit
    let products = [];
    cartItems.forEach(item => {
            products.push(item.id);
        })
        //Envoi dans les données du body l’utilisateur que l’on veux créer. Ensuite, notre route HTTP va créer l’utilisateur et nous le renvoyer dans un objet JSON
    const options = {
            method: 'POST',
            body: JSON.stringify({ contact, products }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Récupération de la réponse du serveur 
    fetch('http://localhost:3000/api/teddies/order', options)
        // Obtention du numéro "order ID"
        .then(response => response.json())
        .then((response) => {
            //On récupere l'identifiant de l'orderId
            let recupOrderId = response.orderId;
            //console.log(recupOrderId)
            // On supprime les anciennes données dans le localstorage
            localStorage.clear();
            // On déclare une nouvelle variable en insérant l'orderId et le prix total
            let orderRecap = { recupOrderId, cartTotal };
            // console.log(orderRecap)
            // On stock les données de l'orderId et du prix total dans le localstorage
            localStorage.setItem("result", JSON.stringify(orderRecap))
                // on creer une fenêtre demandant la validation de la commande et menant à une page de confirmation indiquant l'orderId et le prix total
            let val = confirm("Souhaitez-vous confirmer votre commande?");
            // On utilise une condition si celle-ci est validée ,les données du produit sont afficher sinon celle-ci est annulée
            if (val == true) {
                // Avec document-write ,celui-ci va écrire directement dans le DOM le résultat
                document.write("<center><h2>Votre commande numéro : <br>" + "<p>" + recupOrderId.fontcolor("red") + "</p>" + "d'un total de:<br> " + "<p>" + cartTotal.fontcolor("red") + "</p>" + " euros a été reçue!</h2><B>Merci de votre visite!</B></center>");
            } else {
                document.write("Votre commande est annulée!");
            }
        })
});