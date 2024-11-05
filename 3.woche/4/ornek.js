let numbers = [12, 16, 22, 20, 33, 40];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
    break; // döngüyü sonlandırır
  }
}


const scores = [2, 5, 0, 4, 5, 0, 7, 8, 7, 7, 6, 9, 0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] === 0 || scores[i - 1] === 0) {
    continue; // bu adımı atla
  }
  console.log(scores[i] - scores[i - 1]); // farkı yazdır
}

const text = "hello";

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
  if (text[i] === "l") {
    break; // "l" harfine ulaşıldığında döngü sonlanır
  }
}

const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  if (nums[i] === 3) {
    break; // 3 sayısına ulaştığında döngü durur
  }
}

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
      continue; // 3'ü atla ve sonraki adıma geç
    }
    console.log(nums[i]);
  }
  
