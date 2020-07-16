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

const teddy_1 = new Products('5be9c8541c9d440000665243', 'http://localhost:3000/images/teddy_1.jpg', 'Norbert', 2900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'produit.html#Block1');
const teddy_2 = new Products('5beaa8bf1c9d440000a57d94', 'http://localhost:3000/images/teddy_2.jpg', 'Arnold', 3900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'produit.html#Block2');
const teddy_3 = new Products('5beaaa8f1c9d440000a57d95', 'http://localhost:3000/images/teddy_3.jpg', 'Lenny and Carl', 5900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'produit.html#Block3');
const teddy_4 = new Products('5beaabe91c9d440000a57d96', 'http://localhost:3000/images/teddy_4.jpg', 'Gustav', 4500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'produit.html#Block4');
const teddy_5 = new Products('5beaacd41c9d440000a57d97', 'http://localhost:3000/images/teddy_5.jpg', 'Garfunkel', 5500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'produit.html#Block5');

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
}