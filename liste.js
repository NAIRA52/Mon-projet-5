// Affiche les noeuds enfant du noeud body
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// affichage de "productList" sur la console
console.log("liste des produits");

// fenetre affichant le prenom
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);

//creation de la liste de produit
function Products(_id, image, name, price, description, lien) {
    this._id = _id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
    this.lien = lien;
}

const teddy_1 = new Products('5be9c8541c9d440000665243', 'http://localhost:3000/images/teddy_1.jpg', 'Norbert', 2900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://naira52.github.io/Mon-projet-5/produit.html#Block1');
const teddy_2 = new Products('5beaa8bf1c9d440000a57d94', 'http://localhost:3000/images/teddy_2.jpg', 'Arnold', 3900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://naira52.github.io/Mon-projet-5/produit.html#Block2');
const teddy_3 = new Products('5beaaa8f1c9d440000a57d95', 'http://localhost:3000/images/teddy_3.jpg', 'Lenny and Carl', 5900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://naira52.github.io/Mon-projet-5/produit.html#Block3');
const teddy_4 = new Products('5beaabe91c9d440000a57d96', 'http://localhost:3000/images/teddy_4.jpg', 'Gustav', 4500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://naira52.github.io/Mon-projet-5/produit.html#Block4');
const teddy_5 = new Products('5beaacd41c9d440000a57d97', 'http://localhost:3000/images/teddy_5.jpg', 'Garfunkel', 5500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://naira52.github.io/Mon-projet-5/produit.html#Block5');

console.log(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5);

let products = [];
products.push(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5);

function TableList() {

    let listOfProcuts = "";

    products.forEach(prod =>
        listOfProcuts += `
      <tr class="text-left bg-dark text-light ">
        <td class="w-25"><img src=${prod.image} class="img-fluid img-thumbnail w-75" id="myImg"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-25 align-middle"><a href="${prod.lien}" class= "btn btn-info" >Voir</a></td>
      </tr>
      `
    )

    document.getElementById('productList').innerHTML = listOfProcuts;
} <
article class = "container text-light m-5 bg-dark"
id = "b1" >
    <
    div class = "row p-4" >
    <
    div class = "col-md-6 mb-4" >
    <
    img src = "http://localhost:3000/images/teddy_1.jpg"
alt = "Norbert"
style = "width: 100%;" > < /img> <
    /div>

<
div class = "col-md-6 mb-4" >
    <
    div class = "p-4" >
    <
    h2 > Norbert < /h2> <
    h3 class = "lead font-weight-bold" > 2900€ < /h3> <
    h4 class = "text-danger font-weight-bold" > Description < /h4> <
    h5 > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. < /h5> <
        h6 class = "text-success" > En stock < /h6> <
        /div>

    <
    form class = "d-flex justify-content-around" >
    <
    input type = "number"
value = "1"
min = "1"
aria - label = "Search"
class = "form-control"
style = "width: 100px" >

    <
    select class = "md-form mdb-select colorful-select dropdown-primary" >
    <
    option value = ""
disabled selected > Choisir la couleur < /option> <
    option value = "1" > Tan < /option> <
    option value = "2" > Chocolate < /option> <
    option value = "3" > Black < /option> <
    option value = "4" > White < /option> <
    /select>

<
button class = "btn btn-primary btn-md my-0 p"
type = "submit" > Ajouter au panier <
    i class = "fas fa-shopping-cart ml-1" > < /i> <
    a class = "panier.html" > < /a> <
    /button>

<
/form> <
/div> <
/div> <
/article>

<
article class = "container text-light m-5 bg-dark"
id = "b2" >
    <
    div class = "row p-4" >
    <
    div class = "col-md-6 mb-4" >
    <
    img src = "http://localhost:3000/images/teddy_2.jpg"
alt = "Arnold"
style = "width: 100%;" > < /img> <
    /div>

<
div class = "col-md-6 mb-4" >
    <
    div class = "p-4" >
    <
    h2 > Arnold < /h2> <
    h3 class = "lead font-weight-bold" > 3900€ < /h3> <
    h4 class = "text-danger font-weight-bold" > Description < /h4> <
    h5 > "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5> <
    h6 class = "text-success" > En stock < /h6> <
    /div>

<
form class = "d-flex justify-content-around" >
    <
    input type = "number"
value = "1"
min = "1"
aria - label = "Search"
class = "form-control"
style = "width: 100px" >

    <
    select class = "md-form mdb-select colorful-select dropdown-primary" >
    <
    option value = ""
disabled selected > Choisir la couleur < /option> <
    option value = "1" > Pale brown < /option> <
    option value = "2" > Dark brown < /option> <
    option value = "3" > White < /option> <
    /select>

<
button class = "btn btn-primary btn-md my-0 p"
type = "submit" > Ajouter au panier <
    i class = "fas fa-shopping-cart ml-1" > < /i> <
    a class = "panier.html" > < /a> <
    /button>

<
/form> <
/div> <
/div> <
/article>

<
article class = "container text-light m-5 bg-dark"
id = "b3" >
    <
    div class = "row p-4" >
    <
    div class = "col-md-6 mb-4" >
    <
    img src = "http://localhost:3000/images/teddy_3.jpg"
alt = "Lenny"
style = "width: 100%;" > < /img> <
    /div>

<
div class = "col-md-6 mb-4" >
    <
    div class = "p-4" >
    <
    h2 > Lenny and Carl < /h2> <
    h3 class = "lead font-weight-bold" > 5900€ < /h3> <
    h4 class = "text-danger font-weight-bold" > Description < /h4> <
    h5 > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. < /h5> <
        h6 class = "text-success" > En stock < /h6> <
        /div>

    <
    form class = "d-flex justify-content-around" >
    <
    input type = "number"
value = "1"
min = "1"
aria - label = "Search"
class = "form-control"
style = "width: 100px" >

    <
    select class = "md-form mdb-select colorful-select dropdown-primary" >
    <
    option value = ""
disabled selected > Choisir la couleur < /option> <
    option value = "1" > Brown < /option> <
    /select>

<
button class = "btn btn-primary btn-md my-0 p"
type = "submit" > Ajouter au panier <
    i class = "fas fa-shopping-cart ml-1" > < /i> <
    a class = "panier.html" > < /a> <
    /button>

<
/form> <
/div> <
/div> <
/article>

<
article class = "container text-light m-5 bg-dark"
id = "b4" >
    <
    div class = "row p-4" >
    <
    div class = "col-md-6 mb-4" >
    <
    img src = "http://localhost:3000/images/teddy_4.jpg"
alt = ""
style = "width: 100%;" > < /img> <
    /div>

<
div class = "col-md-6 mb-4" >
    <
    div class = "p-4" >
    <
    h2 > Gustav < /h2> <
    h3 class = "lead font-weight-bold" > 4500€ < /h3> <
    h4 class = "text-danger font-weight-bold" > Description < /h4> <
    h5 > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. < /h5> <
        h6 class = "text-success" > En stock < /h6> <
        /div>

    <
    form class = "d-flex justify-content-around" >
    <
    input type = "number"
value = "1"
min = "1"
aria - label = "Search"
class = "form-control"
style = "width: 100px" >

    <
    select class = "md-form mdb-select colorful-select dropdown-primary" >
    <
    option value = ""
disabled selected > Choisir la couleur < /option> <
    option value = "1" > Brown < /option> <
    option value = "2" > Blue < /option> <
    option value = "3" > Pink < /option> <
    /select>

<
button class = "btn btn-primary btn-md my-0 p"
type = "submit" > Ajouter au panier <
    i class = "fas fa-shopping-cart ml-1" > < /i> <
    a class = "panier.html" > < /a> <
    /button>

<
/form> <
/div> <
/div> <
/article>

<
article class = "container text-light m-5 bg-dark"
id = "b5" >
    <
    div class = "row p-4" >
    <
    div class = "col-md-6 mb-4" >
    <
    img src = "http://localhost:3000/images/teddy_5.jpg"
alt = ""
style = "width: 100%;" > < /img> <
    /div>

<
div class = "col-md-6 mb-4" >
    <
    div class = "p-4" >
    <
    h2 > Garfunkel < /h2> <
    h3 class = "lead font-weight-bold" > 5500€ < /h3> <
    h4 class = "text-danger font-weight-bold" > Description < /h4> <
    h5 > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. < /h5> <
        h6 class = "text-success" > En stock < /h6> <
        /div>

    <
    form class = "d-flex justify-content-around" >
    <
    input type = "number"
value = "1"
min = "1"
aria - label = "Search"
class = "form-control"
style = "width: 100px" >

    <
    select class = "md-form mdb-select colorful-select dropdown-primary" >
    <
    option value = ""
disabled selected > Choisir la couleur < /option> <
    option value = "1" > Beige < /option> <
    option value = "2" > Tan < /option> <
    option value = "3" > Chocolate < /option> <
    /select>

<
button class = "btn btn-primary btn-md my-0 p"
type = "submit" > Ajouter au panier <
    i class = "fas fa-shopping-cart ml-1" > < /i> <
    a class = "panier.html" > < /a> <
    /button> <
    /form> <
    /div> <
    /div> <
    /article>