// affichage de "des blocks" sur la console
console.log("liste des produits");

function Blocks(image, name, price, description, lien, color1, color2, color3, color4) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
    this.lien = lien;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.color4 = color4;

}

const teddy_1 = new Blocks('http://localhost:3000/images/teddy_1.jpg', 'Norbert', '2900 €', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Block1', 'Tan', 'Chocolate', 'Black', 'White');
const teddy_2 = new Blocks('http://localhost:3000/images/teddy_2.jpg', 'Arnold', '3900 €', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Block2', 'Pale brown', 'Dark brown', 'White');
const teddy_3 = new Blocks('http://localhost:3000/images/teddy_3.jpg', 'Lenny and Carl', '5900 €', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Block3', 'Brown');
const teddy_4 = new Blocks('http://localhost:3000/images/teddy_4.jpg', 'Gustav', '4500 €', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Block4', 'Brown', 'Blue', 'Pink');
const teddy_5 = new Blocks('http://localhost:3000/images/teddy_5.jpg', 'Garfunkel', '5500 €', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Block5', 'Beige', 'Tan', 'Chocolate');

console.log(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5);

//description du Block1
let blocks = [];
blocks.push(teddy_1, teddy_2, teddy_3, teddy_4, teddy_5); {
    let ContBlock = "";
    blocks.forEach(bloc =>
        ContBlock += `
        <article class="container text-light m-5 bg-dark" id=${bloc.lien}>
        <div class="row p-4">
        <div class="col-md-6 mb-4">
            <img src=${bloc.image} alt="Norbert" style="width: 100%;"></img>
        </div>

        <div class="col-md-6 mb-4">
            <div class="p-4">
                <h2>${bloc.name}</h2>
                <h3 class="lead font-weight-bold">${bloc.price}</h3>
                <h4 class="text-danger font-weight-bold">Description</h4>
                <h5>${bloc.description}</h5>
                <h6 class="text-success">En stock</h6>
            </div>

            <form class="d-flex justify-content-around">
                <input type="number" value="0" min="0" aria-label="Search" class="form-control" style="width: 100px">

                <select class="md-form mdb-select colorful-select dropdown-primary">
                    <option value="" disabled selected>Choisir la couleur</option>
                    <option value="1">${bloc.color1}</option>
                    <option value="2">${bloc.color2}</option>
                    <option value="3">${bloc.color3}</option>
                    <option value="4">${bloc.color4}</option>
                  </select>

                <button class="btn btn-primary btn-md my-0 p" type="submit">Ajouter au panier
                            <i class="fas fa-shopping-cart ml-1"></i>
                            <a class="panier.html"></a>
                     </button>

            </form>
        </div>
    </div>
    </article>

    `

    )
    document.getElementById('Blok').innerHTML = ContBlock;
}