// sort

// 1. Sort the shoppingBasket by price from the cheapest to the most expensive
// 2. Sort the shoppingBasket by quantity from the least to the most
// 3. Sort the shoppingBasket by the total price (price * quantity) from the cheapest to the most expensive
// 4. Sort the shoppingBasket by the product name alphabetically
// 5. Sort the shoppingBasket by the product name alphabetically in reverse order


const num = [1, 20, 38, 4, 50, 6, 17];
console.log("🚀 ~ num:", num)

const sortedByPrice = [...num].sort((a, b) => {
    return a - b;
});
console.log("🚀 ~ sortedByPrice:", sortedByPrice)

const shoppingBasket = [
    { product: "candy", price: 1.09, quantity: 2 },
    { product: "bread", price: 0.99, quantity: 1 },
    { product: "tea", price: 3.99, quantity: 1 },
    { product: "chips", price: 2.99, quantity: 1 },
    { product: "peanuts", price: 1.99, quantity: 3 },
];

const sortedByPrice2 = [...shoppingBasket].sort((a, b) => {
 //   return a.price - b.price;
 if(a.price<b.price){
        return -1;
 }
    if(a.price>b.price){
            return 1;
    }
    return 0;
});
console.log("🚀 ~ sortedByPrice2 ~ sortedByPrice2:", sortedByPrice2)

const sortedByproduct = [...shoppingBasket].sort((a,b) => {
  /*  if(a.product<b.product){
        return -1;
    }
    if(a.product>b.product){
        return 1;
    }
    return 0;*/
    // return a.product-b.product;
    return a.product.localeCompare(b.product);
});
console.log("🚀 ~ sortedByproduct:", sortedByproduct)


