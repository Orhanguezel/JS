// Rastgele sayılardan oluşan bir dizi oluşturmak için fonksiyon
function generateNewArray(n) {
    const arr = new Array(n).fill().map(() => {
        return Math.floor(Math.random() * 5000) + 1;
    });
    return arr;
}

// Lineer arama fonksiyonu
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return `Element ${target} found at index ${i}`;
        }
    }
    return `Element ${target} not found in the array`;
}

// 2000 elemanlı bir dizi oluştur
const newArray = generateNewArray(2000);
console.log(newArray);

// Aranacak hedef öğeyi belirtin
const target = 150; // Örneğin, 150 sayısını arıyoruz

// Lineer arama yap ve sonucu yazdır
console.log(linearSearch(newArray, target));


// 