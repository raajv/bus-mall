`use strict`

console.log('hello world');

//-------------------------------------Global Variables------------------------------------------//
let productVoteEl=document.getElementById('products');
let product1ImgEl=document.getElementById('product1');
let product1H2El=document.getElementById('product1h2');
let product2ImgEl=document.getElementById('product2');
let product2H2El=document.getElementById('product2h2');
let product3ImgEl=document.getElementById('product3');
let product3H2El=document.getElementById('product3h2');

let product1 ;
let product2 ;
let product3 ;
//-------------------------------------object constructor------------------------------------------//
function Product(name,imgPath,counter){
  this.name = name;
  this.imgPath=imgPath;
  this.counter=counter;

  Product.allProducts.push(this);
}
Product.allProducts = [];
//-------------------------------------Prototype------------------------------------------//
Product.prototype.renderProduct = function(h2,imgPath){
  h2.textContent = this.name ;
  imgPath.src = this.imgPath ;
};

//-------------------------------------Global Functions------------------------------------------//


function getThreeProducts() {
  // picks 3 products at random from an array of products
  let productOne = Math.floor(Math.random() * Product.allProducts.length);
  product1 = Product.allProducts[productOne];
  let productTwo = Math.floor(Math.random() * Product.allProducts.length);
  product2 = Product.allProducts[productTwo];
  let productThree = Math.floor(Math.random() * Product.allProducts.length);
  product3 = Product.allProducts[productThree];
  while (product2 === null || product2 === product1 || product2===product3) {
    let productTwo = Math.floor(Math.random() * Product.allProducts.length);
    product2 = Product.allProducts[productTwo];
  }
}
function renderProducts(){
  product1.renderProduct(product1H2El,product1ImgEl);
  product2.renderProduct(product2H2El,product2ImgEl);
  product3.renderProduct(product3H2El,product3ImgEl);
}

// function renderResults() {
//   ulElem.textContent = '';

  // for (let goat of Goat.allGoats) {
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${goat.name}: ${goat.votes}`;
  //   ulElem.appendChild(liElem)
  // }

  // for (let i = 0; i < Goat.allGoats.length; i++) {
  //   let goat = Goat.allGoats[i];
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${goat.name}: ${goat.votes}`;
  //   ulElem.appendChild(liElem)
  // }
// }

function handleClick(e) {
  alert(e.target.id);}
  // let imageClicked = e.target.id;
  // if (imageClicked === 'right_goat_img' || imageClicked === 'left_goat_img') {
  //   clickCounter++;
  //   if (imageClicked === 'right_goat_img') {
  //     rightGoat.votes++;
  //     console.log(rightGoat)
  //   }
  //   if (imageClicked === 'left_goat_img') {
  //     leftGoat.votes++;
  //     console.log(leftGoat);
  //   }
  //   getTwoGoats();
  //   renderTheGoats();
  // }
//   if (clickCounter === 10) {
//     // alert('show the goat totals');
//     renderResults();
//     voteSectionElem.removeEventListener('click', handleClick);
//   }

// }

productVoteEl.addEventListener('click',handleClick);
//-------------------------------------Function called------------------------------------------//
new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('pen', './img/dog-duck.jpg');
new Product('pet-sweep', './img/dog-duck.jpg');
new Product('scissors', './img/dog-duck.jpg');
new Product('shark', './img/dog-duck.jpg');
new Product('sweep', './img/dog-duck.jpg');
new Product('tauntaun', './img/dog-duck.jpg');
new Product('unicorn', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('water can', './img/water-can.jpg');
new Product('wine glass', './img/wine-glass.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
getThreeProducts() ;
renderProducts();
