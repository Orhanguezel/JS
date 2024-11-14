function generateNewArray(n) {
  let i = 0;
  const arr = new Array(n).fill().map(() => {
    return Math.floor(Math.random() * 50000 + 1);
  });
  return arr;
}

const newArray = generateNewArray(20000);

console.log(newArray);

// function exampleLinearTime(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return arr[i];
//     }
//   }
//   return false;
// }

// console.time("Linear");
// console.log(exampleLinearTime(newArray, 5500));
// console.timeEnd("Linear");

// newArray.sort((a, b) => {
//   return a - b;
// });

// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) {
//       return arr[mid];
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return false;
// }

// console.time("Binary");
// console.log(binarySearch(newArray, 5500));

// console.timeEnd("Binary");

function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log(arr[i]);

        return true;
      }
    }
  }
  return false;
}
console.time("Bad");
console.log(hasDuplicate(newArray));
console.timeEnd("Bad");

function hasDuplicateGood(arr) {
  const newSet = new Set();
  for (const item of arr) {
    if (newSet.has(item)) {
      return true;
    }
    newSet.add(item);
  }
  console.log(newSet);

  return false;
}
console.time("Good");
console.log(hasDuplicateGood(newArray));
console.timeEnd("Good");
