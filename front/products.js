let url = window.location.href;
console.log(url);
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id"));


let id = parsedUrl.searchParams.get("id");
fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(teddy => {
        console.log(teddy)
        products(teddy);
    });

let products = [{
    name: "http://localhost:3000/api/teddies/" + name,
    price: "http://localhost:3000/api/teddies/" + price,
    colors: "http://localhost:3000/api/teddies/" + colors,
}]