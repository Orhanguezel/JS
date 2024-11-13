const person = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
};

// Object Üzerinde Yapılan İşlemler ve Sık Kullanılan Yöntemler
console.log(person.name); // Çıktı: "Ali"
console.log(person.age); // Çıktı: 30
console.log(person["city"]); // Çıktı: "Istanbul"
person.country = "Turkey"; // Yeni özellik ekleme
person["hobby"] = "Reading"; // Alternatif ekleme
console.log(person);
person.age = 31; // Yaşı güncelle
person["city"] = "Ankara"; // Şehri güncelle
console.log(person);
delete person.hobby; // "hobby" özelliğini siler
console.log(person);

console.log(Object.keys(person)); // Object'in key'lerini dizi olarak döndürür  ["name", "age", "city", "country"]
console.log(Object.values(person)); // Object'in value'larını dizi olarak döndürür ["Ali", 31, "Ankara", "Turkey"]
console.log(Object.entries(person)); // Object'in key ve value'larını dizi olarak döndürür [["name", "Ali"], ["age", 31], ["city", "Ankara"], ["country", "Turkey"]]
const flatArray = Object.entries(person).flat(); // [["name", "Ali"], ["age", 31], ["city", "Ankara"], ["country", "Turkey"]] => ["name", "Ali", "age", 31, "city", "Ankara", "country", "Turkey"]
console.log(flatArray);
const flatArray2 = Object.values(person).flat(); // ["Ali", 31, "Ankara", "Turkey"] flat methodu kullanmaya gerek yok.
console.log(flatArray2);

console.clear();

// Object'in içindeki özellikleri döngü ile gezmek
for (let key in person) {
  console.log(key, person[key]);
}

// Object'in içindeki özellikleri döngü ile gezmek (Object.entries)
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}

// Object'in içindeki özellikleri döngü ile gezmek (Object.keys)
Object.keys(person).forEach((key) => {
  console.log(key, person[key]);
});

// Object'in içindeki özellikleri döngü ile gezmek (Object.values)
Object.values(person).forEach((value) => {
  console.log(value);
});

console.clear();

// Object Metodları ve Kullanımları
const person2 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const person3 = {
  name: "Veli",
  age: 25,
  city: "Ankara",
  country: "Turkey",
};

const person4 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

console.log(Object.is(person2, person3)); // false (iki object birbirine eşit değil)
console.log(Object.is(person2, person4)); // false (iki object birbirine eşit değil)
console.log(Object.is(person2, person2)); // true (iki object birbirine eşit)

console.log(Object.isExtensible(person2)); // true (Object'e yeni özellik eklenebilir)
Object.preventExtensions(person2); // Object'e yeni özellik eklenemez
console.log(Object.isExtensible(person2)); // false (Object'e yeni özellik eklenemez)

console.log(Object.isSealed(person2)); // false (Object'in özellikleri silinemez)
Object.seal(person2); // Object'in özellikleri silinemez
console.log(Object.isSealed(person2)); // true (Object'in özellikleri silinemez)

console.log(Object.isFrozen(person2)); // false (Object'in özellikleri değiştirilemez)
Object.freeze(person2); // Object'in özellikleri değiştirilemez
console.log(Object.isFrozen(person2)); // true (Object'in özellikleri değiştirilemez)

console.clear();

// Object.assign() Metodu
const person5 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const person6 = {
  name: "Veli",
  age: 25,
  city: "Ankara",
  hobby: "listening music",
  country: "Turkey",
  job: "Engineer",
};

const person7 = {
  name: "Ali",
  age: 30,
  city: "Kirsehir",
  country: "Turkey",
  hobby: "Reading",
};

const newPerson = Object.assign({}, person5, person6, person7); // Object'leri birleştirir
console.log(newPerson);

console.clear();

const newPerson2 = Object.assign({}, person5, { city: "Ankara" }); // Object'in özelliğini günceller
console.log(newPerson2);

const newPerson3 = Object.assign({}, person5, { city: "Koln" }, { age: 25 }); // Object'in özelliğini günceller
console.log(newPerson3);

console.clear();

// hasOwnProperty() Metodu
const person9 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

console.log(person9.hasOwnProperty("name")); // true
console.log(person9.hasOwnProperty("age")); // true
console.log(person9.hasOwnProperty("city")); // true
console.log(person9.hasOwnProperty("country")); // true
console.log(person9.hasOwnProperty("job")); // false

console.clear();

// Spread Operator
const person10 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const newPerson4 = { ...person10, city: "Ankara" }; // Object'in özelliğini günceller
console.log(newPerson4);

const newPerson5 = { ...person10, city: "Koln", age: 25 }; // Object'in özelliğini günceller
console.log(newPerson5);

console.clear();

// JSON.stringify() ve JSON.parse() Metodları
const person11 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const person12 = JSON.stringify(person11); // Object'i JSON formatına çevirir
console.log(person12);

const person13 = JSON.parse(person12); // JSON formatındaki Object'i Object'e çevirir
console.log(person13); // {name: "Ali", age: 30, city: "Istanbul", country: "Turkey"}

console.clear();



// structuredClone(obj)
const person14 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const person15 = structuredClone(person14); // Object'i kopyalar
console.log(person15);

console.clear();

// Yüzeysel (Shallow) ve Derin (Deep) Kopyalama Farkı,

const person16 = {
    name: "Ali",
    age: 30,
    city: "Istanbul",
    country: "Turkey",
    job: {
        title: "Engineer",
        salary: 5000,
    },
    };

    const person17 = { ...person16 }; // Yüzeysel kopyalama
    console.log(person17);
    console.log(person17 === person16); // false
    console.log(person17.job === person16.job); // true

    const person18 = JSON.parse(JSON.stringify(person16)); // Derin kopyalama
    console.log(person18);
    console.log(person18 === person16); // false
    console.log(person18.job === person16.job); // false

    console.clear();


// Object Destructuring
const person19 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
};

const { name, age, city, country } = person19;
console.log(name, age, city, country);

const { name: ad, age: yas, city: sehir, country: ulke } = person19;
console.log(ad, yas, sehir, ulke);
console.log(name);
console.log(ad);
console.log(city);

const { name: ad2, ...rest } = person19;
console.log(ad2, rest);

const person20 = {
    name: "Ali veli",
    age: 30,
    country: "Turkey",
  };

  const { name: ad1, age: yas1, city: sehir1 = "Bilinmiyor", country: ulke1 } = person20;
  console.log(ad1, yas1, sehir1, ulke1);

    console.clear();


// Object Literal
const name2 = "Ali";
const age2 = 30;

const person21 = {
  name2,  // name: name
  age2    // age: age
};

console.log(person21); // Çıktı: { name: "Ali", age: 30 }
const name3 = "vorname";
const age3 = "alter";
const person22 = {
    [name3]: "Ali",
    [age3]: 30,
    };

    console.log(person22); // Çıktı: { vorname: "Ali", alter: 30 }

    console.clear();


// Object Constructor
const person23 = new Object();
person23.name = "Ali";
person23.age = 30;
person23.city = "Istanbul";
person23.country = "Turkey";
console.log(person23);

const person24 = new Object({
    name: "Ali",
    age: 30,
    city: "Istanbul",
    country: "Turkey",
    });
    console.log(person24);

    console.clear();
// Object.create() Metodu
// Object Prototype
// Object Inheritance
// Object Methodları
// Object Kullanım Alanları
// Object Örnekleri
// Object Özellikleri
// Object Yapısı
// Object İçinde Object
// Object İçinde Array
// Object İçinde Function
// Object İçinde Method
// Object İçinde Property
// Object İçinde Constructor
// Object İçinde Prototype



// Yüzeysel (Shallow) ve Derin (Deep) Kopyalama Farkı, Object.assign() ve Spread Operator, JSON.stringify() ve JSON.parse() Metodları, structuredClone(obj), Object Destructuring, Object Literal, Object Constructor, Object.create() Metodu, Object Prototype, Object Inheritance, Object Methodları, Object Metodları, Object Kullanım Alanları, Object Örnekleri, Object Özellikleri, Object Yapısı, Object İçinde Object, Object İçinde Array, Object İçinde Function, Object İçinde Method, Object İçinde Property, Object İçinde Constructor, Object İçinde Prototype, Object İçinde Inheritance
const person8 = {
  name: "Ali",
  age: 30,
  city: "Istanbul",
  country: "Turkey",
  job: {
    title: "Engineer",
    salary: 5000,
  },
};
