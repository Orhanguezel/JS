shoppingBasket = [
    { id: 1, offer: false, product: 'Oranges', price: 1.20, quantity: 2 },
    { id: 2, offer: false, product: 'Apples', price: 0.90, quantity: 6 },
    { id: 3, offer: true, product: 'Bananas', price: 0.50, quantity: 3 },
    { id: 4, offer: false, product: 'Cat food', price: 1.00, quantity: 12 }
];

// function convert array to another format

function convertArray(array, converter){
    const convertedArray =[];
    for(let i = 0; i < array.length; i++){
        convertedArray.push(converter(array[i]));
    }
    return convertedArray;
}

function getProductName(object){
    return object.product;

}

const productNames = convertArray(shoppingBasket, getProductName);

console.log(productNames);

const productNames1= shoppingBasket.map((x) => x.product);
console.log(productNames1);

// function filter array

function filterArray(array, filter){
    const filteredArray = [];
    for(let i = 0; i < array.length; i++){
        if(filter(array[i])){
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function getOffer(object){
    return object.offer;
}

const offers = filterArray(shoppingBasket, getOffer);
console.log(offers);


const offers1 = shoppingBasket.filter((x) => x.offer);
console.log(offers1);


function filterArray(array, converter) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (converter(array[i])) {
        const result = converter(array[i]);
        filteredArray.push(result);
      }
    }
    return filteredArray;
  }
  
  function cheapProducts(object) {
    if (object.price < 1) {
      return object;
    }
  }
  const cheapItems = filterArray(shoppingBasket, cheapProducts);
  console.log(cheapItems);
  
  function offerOnly(object) {
    if (object.offer) {
      return object;
    }
  }
  const productOnOffer = filterArray(shoppingBasket, offerOnly);
  console.log(productOnOffer);
  