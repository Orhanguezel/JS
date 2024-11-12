const data = new Date();
console.log(data);
console.log(data.getDate());
console.log(data.getDay());
console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getHours());
console.log(data.getUTCHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getTime());

console.log(data.toDateString());
console.log(data.toTimeString());
console.log(data.toISOString());
console.log(data.toJSON());
console.log(data.toLocaleString());
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());
console.log(data.toString());
console.log(data.toUTCString());
console.log(data.valueOf());

console.log(data.setFullYear(2022));
console.log(data.setMonth(1));
console.log(data.setDate(1));
console.log(data.setHours(1));

console.log(data);
console.log(data.getFullYear());
console.log(data.toString());

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");

const differenceInMs = endDate - startDate;
const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

console.log(differenceInMs); 
console.log(differenceInDays);


console.log(data.toDateString());

const timestamp = data.getTime();
console.log(timestamp); // Ör: 1730495730000 (milisaniye)

const newDateFromTimestamp = new Date(timestamp);
console.log(newDateFromTimestamp); 