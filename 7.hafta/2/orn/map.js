// map methods

// Map.get()

const map = new Map([['1', 'a'],['2', 'b'],['3', 'c']]);
console.log(map.get('1')); // a
console.log(map.get('2')); // b
console.log(map.get('3')); // c

const map1 = new Map();
map1.set('1', 'a').set('2', 'b').set('3', 'c');
console.log(map1.get('1')); // a
console.log(map1); // Map { '1' => 'a', '2' => 'b', '3' => 'c' }
console.log(typeof map1); // object


