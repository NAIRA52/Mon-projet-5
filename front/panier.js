let cart = [{
        id: "vqhqv",
        name: "norbert",
        qty: 9,
    },
    {
        id: "jqsjh",
        name: "lebert",
        qty: 8,
    }
];
let cart = JSON.parse(localstorage.getItem("cart"));

//ajout d'un objet dans le panier(le produit n'existe pas)
let newProduct = {
    id: "isqqsj",
    name: "paddingteom",
    qty: 3
};
//cart.push(product);
let exists = false;
cart.forEach(product => {
    console.log(product.id);
    if (product.id === newProduct.id) {
        exists = true;
        console.log("produuit exite daeja palnie");
        product.qty += newProduct.qty;
    }
});
if (exists === false) {
    cart.push(newProduct);
}