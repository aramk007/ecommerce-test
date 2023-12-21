// console.log('yo');
const storeContainer = document.getElementById("store-container");

let item = {
  name: 'Running Shoes',
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ2uMz7L6Kh1XDEKGHV2VWyHnC-ZiXI7peA&usqp=CAU"
}
let item2 = {
  name: 'Cross Training Shoes',
  price: 99,
  image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691093041-nikemetcon8-64cc079f9e212.jpg?crop=1xw:1xh;center,top&resize=175:*"
}
let item3 = {
  name: 'Spin Cycle Shoes',
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ2uMz7L6Kh1XDEKGHV2VWyHnC-ZiXI7peA&usqp=CAU"
}
let item4 = {
  name: 'Tennis Shoes',
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ2uMz7L6Kh1XDEKGHV2VWyHnC-ZiXI7peA&usqp=CAU"
}
let item5 = {
  name: 'Bowling Shoes',
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ2uMz7L6Kh1XDEKGHV2VWyHnC-ZiXI7peA&usqp=CAU"
}
let item6 = {
  name: 'Golf Shoes',
  price: 99,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQ2uMz7L6Kh1XDEKGHV2VWyHnC-ZiXI7peA&usqp=CAU"
}
let products = [item, item2, item3, item4, item5, item6];
// console.log(products);
// console.log(products.length);
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  // console.log(products[i]);

}

// products.map((x) => { console.log(x); })

function multiplyArray() {
  // console.log('function');
}
multiplyArray()
multiplyArray()

const arrowFunction = () => {
  // console.log('arrowFunction');
}
arrowFunction()

// function

// function displayProducts() {
//   let productDiv = document.createElement("div")
//   productDiv.textContent = item.name
//   productDiv.style.fontSize = "1.15rem"
//   productDiv.setAttribute("class", "shoes")
//   storeContainer.append(productDiv);
//   let productImage = document.createElement("img")
//   productImage.src = item.image
// storeContainer.append(productImage)

// }
// displayProducts()
// let userPrompt = prompt('Hi')
// console.log(userPrompt);
// alert("You agree that you're 18 or over!")
// let userConfirm = confirm('great!')
// console.log(userConfirm);
// "for" loop through products and append each product. 
for (let i = 0; i < products.length; i++) {
  let productContainer = document.createElement("div")
  productContainer.setAttribute("class", "product-container")
  let productDiv = document.createElement("div")
  productDiv.textContent = products[i].name
  productContainer.append(productDiv);
  let productImage = document.createElement ("img")
  productImage.src = products[i].image
  productContainer.append(productImage)
storeContainer.append(productContainer)
  // console.log(products[i]);
// displayProducts()
}
