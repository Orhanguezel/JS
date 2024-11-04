const arr =[1,2,3,4,5,6,7,8,9,10];
const newArr=[...arr];
newArr[0]="ali";
console.log(arr);
console.log(newArr);

function sum(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++)
      result += nums[i];
      return result; // Döngü tamamlandıktan sonra toplam sonucu döndürür  
  }
  
  console.log(sum(1, 2, 35, 4, 5, 63, 7, 8, 9, 10)); // 144
  console.log(sum(1, 2)); // 3
  

  const  product ={
        id:1,
        name:"Samsung S6",
        price:3000,
        color: ["red","blue","black"],
        stock:1000,
        warenty: {
            starts:2024,
            monthlyPayment:false,

        },
  };

  const newProduct={...product};
    newProduct.name="Samsung S7";
    newProduct.price=4000;
    newProduct.color.push("white");
    newProduct.stock=500;
    newProduct.warenty.starts=2025;
    newProduct.warenty.monthlyPayment=true;

console.log(product);
console.log(newProduct);
  