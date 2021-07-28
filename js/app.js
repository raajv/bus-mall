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
let ulEl=document.getElementById('result');
let createChartEl=document.getElementById('chartButton');
let clickCounter=0;

let product1;
let product2;
let product3;
//-------------------------------------object constructor------------------------------------------//
function Product(name,imgPath,votes,views){
  this.name = name;
  this.imgPath=imgPath;
  this.votes=votes;
  this.views=views;

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
  while (product3 === null || product3 === product1 || product3===product2) {
    let productThree = Math.floor(Math.random() * Product.allProducts.length);
    product3 = Product.allProducts[productThree];
  }
}
function renderProducts(){
  product1.renderProduct(product1H2El,product1ImgEl);
  product2.renderProduct(product2H2El,product2ImgEl);
  product3.renderProduct(product3H2El,product3ImgEl);
}

function renderResults() {
  for (let product of Product.allProducts) {
    
    let liEl = document.createElement('li');
    liEl.textContent = `${product.name}: ${product.votes}`;
    ulEl.appendChild(liEl);
  }}



function handleClick(e) {
  // alert(e.target.id);}
  let imageClicked = e.target.id;
  if (imageClicked === 'product1' || imageClicked === 'product2' || imageClicked==='product3') {
    clickCounter++;
    if (imageClicked === 'product1') {
      product1.votes++;
      product1.views++;
      console.log(product1);
    }
    if (imageClicked === 'product2') {
      product2.votes++;
      product2.views++;
      console.log(product2);
    }
    if (imageClicked === 'product3') {
      product3.votes++;
      product3.views++;
      console.log(product3);
    }
    getThreeProducts() ;
    renderProducts(); }

if (clickCounter === 25) {
  alert('show totals');
    renderResults();
    // voteSectionElem.removeEventListener('click', handleClick);
  }

}

 

productVoteEl.addEventListener('click',handleClick);
createChartEl.addEventListener('click',handleChart);
//-------------------------------------Function called------------------------------------------//
new Product('bag', './img/bag.jpg',0,0);
new Product('banana', './img/banana.jpg',0,0);
new Product('bathroom', './img/bathroom.jpg',0,0);
new Product('boots', './img/boots.jpg',0,0);
new Product('breakfast', './img/breakfast.jpg',0,0);
new Product('bubblegum', './img/bubblegum.jpg',0,0);
new Product('chair', './img/chair.jpg',0,0);
new Product('cthulhu', './img/cthulhu.jpg',0,0);
new Product('dog-duck', './img/dog-duck.jpg',0,0);
new Product('pen', './img/pen.jpg',0,0);
new Product('pet-sweep', './img/pet-sweep.jpg',0,0);
new Product('scissors', './img/scissors.jpg',0,0);
new Product('shark', './img/shark.jpg',0,0);
new Product('sweep', './img/sweep.png',0,0);
new Product('tauntaun', './img/tauntaun.jpg',0,0);
new Product('unicorn', './img/unicorn.jpg',0,0);
new Product('dragon', './img/dragon.jpg',0,0);
new Product('water can', './img/water-can.jpg',0,0);
new Product('wine glass', './img/wine-glass.jpg',0,0);

getThreeProducts() ;
renderProducts();

//-----------------------------------------------------CHART----------------------------//
function handleChart(e){
  let buttonClicked=e.target.id;
  if (buttonClicked){
let ctx = document.getElementById('myChart').getContext('2d');
let nameArray=[];
let voteArray=[];
let viewsArray=[];
for (let product of Product.allProducts){
  nameArray.push(product.name);
  voteArray.push(product.votes);
  viewsArray.push(product.views);
};
console.log(nameArray);
console.log(viewsArray);
console.log(voteArray);
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameArray,
        datasets: [{
            label: '# of Votes',
            data: voteArray,
            label: '# of views',
            data : viewsArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
}
