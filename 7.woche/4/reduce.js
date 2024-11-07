

// reduce method: ist eine Array-Methode, die alle Elemente eines Arrays auf ein einzelnes Ergebnis reduziert.
const array = [1, 2, 3, 4, 5, 6, 7];

const sum=array.reduce((accumulator, currentValue, index, array) => {
    console.log("🚀 ~ array.reduce ~ accumulator:", accumulator);
    console.log("🚀 ~ array.reduce ~ currentValue:", currentValue);
    console.log("🚀 ~ array.reduce ~ index:", index);
    console.log("🚀 ~ array.reduce ~ array:", array);
    return accumulator + currentValue;
}, 0);

console.log("🚀 ~ sum:", sum);

console.clear();


// 1. Parameter: accumulator: ist der Wert, der bei jedem Schleifendurchlauf zurückgegeben wird.
// 2. Parameter: currentValue: ist der aktuelle Wert, der im Array durchlaufen wird.
// 3. Parameter: index: ist der Index des aktuellen Elements.
// 4. Parameter: array: ist das Array, das gerade durchlaufen wird.

const shoppingBasket = [
    { product: "candy", price: 1.09, quantity: 2 },
    { product: "bread", price: 0.99, quantity: 1 },
    { product: "tea", price: 3.99, quantity: 1 },
    { product: "chips", price: 2.99, quantity: 1 },
    { product: "peanuts", price: 1.99, quantity: 3 },
];

const total = shoppingBasket.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
}, 0);

console.log("🚀 ~ total:", total);

const mostExpensiveProduct = shoppingBasket.reduce((acc, cur) => {
    if (acc.price < cur.price) {
        return cur;
    } else {
        return acc;
    }
} , shoppingBasket[0]);

console.log("🚀 ~ mostExpensiveProduct:", mostExpensiveProduct);

const mostExpensiveProduct2 = shoppingBasket.reduce((acc, cur) => {
    return acc.price < cur.price ? cur : acc;
}
);

console.log("🚀 ~ mostExpensiveProduct2:", mostExpensiveProduct2);
