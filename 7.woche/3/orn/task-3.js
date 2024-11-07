import { categoryData } from "./data.js";

const subcategoryNames1 = categoryData.subcategories.map(subcategory => subcategory.name);
console.log(subcategoryNames1);

categoryData.subcategories.forEach(subcategory => {
    console.log(subcategory.name);
  });
  

  // Subcategory isimlerini içeren bir dizi oluşturuyoruz
const subcategoryNames2 = categoryData.subcategories.map(subcategory => subcategory.name);

// İstediğiniz bir yerde subcategoryNames2'i kullanabilirsiniz
// Örneğin:
function printNames(namesArray) {
  console.log("Subcategory Names:", namesArray);
}

printNames(subcategoryNames2);

// soru 1

const itemPrices = [];

categoryData.subcategories.forEach(subcategory => {
    subcategory.items.forEach(item => {
        itemPrices.push(item.prices);
    });
});

console.log(itemPrices);

//soru 2

