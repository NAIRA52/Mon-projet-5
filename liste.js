// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// affichage de "productList" sur la console
console.log("liste des produits");

// fenetre affichant le prenom
const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);

//creation de la liste de produit
function Products(image, name, price, description) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
}

const teddy_1 = new Products('http://localhost:3000/images/teddy_1.jpg', 'Norbert', 2900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const teddy_2 = new Products('http://localhost:3000/images/teddy_2.jpg', 'Arnold', 3900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const teddy_3 = new Products('http://localhost:3000/images/teddy_3.jpg', 'Lenny and Carl', 5900, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const teddy_4 = new Products('http://localhost:3000/images/teddy_4.jpg', 'Gustav', 4500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const teddy_5 = new Products('http://localhost:3000/images/teddy_5.jpg', 'Garfunkel', 5500, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

console.log(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5);

let products = [];
products.push(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5);

function populateTableList() {

    let listOfProcuts = "";

    products.forEach(prod =>
        listOfProcuts += `
      <tr class="text-left bg-dark text-light ">
        <td class="w-25"><img src=${prod.image} class="img-fluid img-thumbnail w-75" id="myImg"></td>
        <td class="w-25 align-middle">${prod.name}</td>
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle">${prod.description}</td>
        <td class="w-25 align-middle"><button class="btn btn-info" id="button">Voir</button></td>
      </tr>
      `
    )

    document.getElementById('productList').innerHTML = listOfProcuts;
}

// personnalisation du produit//