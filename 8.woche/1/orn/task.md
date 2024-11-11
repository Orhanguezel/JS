İşte yukarıdaki örneklere benzer beş yeni soru:

---

## Question 1

`Book` adında bir sınıf oluştur.

Bu sınıfın şu özellikleri olmalı:

- `title`: Kitabın başlığı
- `author`: Yazarın adı
- `pages`: Kitapta bulunan sayfa sayısı
- `publisher`: Yayınevi adı

Bu sınıfın şu metodu olmalı:

- `summary()`: Kitabın adı, yazar ve yayınevini içeren bir açıklama döndürmeli. Örneğin: `"The Great Gatsby, F. Scott Fitzgerald tarafından, Charles Scribner's Sons yayınevi tarafından basılmıştır."`

Örnek:

```js
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Charles Scribner's Sons");

console.log(book.summary()); // The Great Gatsby, F. Scott Fitzgerald tarafından, Charles Scribner's Sons yayınevi tarafından basılmıştır.
```

---

## Question 2

`Car` adında bir sınıf oluştur.

Bu sınıfın şu özellikleri olmalı:

- `make`: Arabanın markası
- `model`: Arabanın modeli
- `year`: Arabanın üretim yılı
- `mileage`: Arabanın kilometresi

Bu sınıfın şu metodları olmalı:

- `description()`: Arabanın marka, model ve üretim yılını içeren bir açıklama döndürmeli. Örneğin: `"2022 model Honda Accord"`
- `drive(kilometers)`: `mileage` değerini verilen `kilometers` kadar artırmalı.

Örnek:

```js
const car = new Car("Honda", "Accord", 2022, 15000);

console.log(car.description()); // 2022 model Honda Accord
car.drive(100); 
console.log(car.mileage); // 15100
```

---

## Question 3

`Movie` adında bir sınıf oluştur.

Bu sınıfın şu özellikleri olmalı:

- `title`: Filmin adı
- `director`: Yönetmenin adı
- `duration`: Filmin süresi, dakika cinsinden bir sayı
- `genre`: Filmin türü

Bu sınıfın şu metodları olmalı:

- `getDurationInHours()`: Filmin süresini saat cinsinden döndürmeli.
- `summary()`: Filmin adı, yönetmen adı ve süresini içeren bir açıklama döndürmeli. Örneğin: `"Inception, Christopher Nolan tarafından yönetilmiş, 2 saat 28 dakika uzunluğundadır."`

Örnek:

```js
const movie = new Movie("Inception", "Christopher Nolan", 148, "Sci-Fi");

console.log(movie.getDurationInHours()); // 2.47 saat
console.log(movie.summary()); // Inception, Christopher Nolan tarafından yönetilmiş, 2 saat 28 dakika uzunluğundadır.
```

---

## Question 4

`Laptop` adında bir sınıf oluştur.

Bu sınıfın şu özellikleri olmalı:

- `brand`: Markası
- `model`: Modeli
- `ram`: RAM kapasitesi (GB)
- `storage`: Depolama kapasitesi (GB)

Bu sınıfın şu metodları olmalı:

- `specs()`: Dizüstü bilgisayarın tüm özelliklerini gösteren bir açıklama döndürmeli. Örneğin: `"Dell Inspiron, 16GB RAM ve 512GB depolama kapasitesi ile."`
- `upgradeRam(additionalRam)`: Verilen `additionalRam` kadar RAM artırmalı.

Örnek:

```js
const laptop = new Laptop("Dell", "Inspiron", 16, 512);

console.log(laptop.specs()); // Dell Inspiron, 16GB RAM ve 512GB depolama kapasitesi ile.
laptop.upgradeRam(8);
console.log(laptop.ram); // 24
```

---

## Question 5

`Employee` adında bir sınıf oluştur.

Bu sınıfın şu özellikleri olmalı:

- `name`: Çalışanın adı
- `position`: Çalışanın pozisyonu
- `salary`: Çalışanın maaşı
- `hireDate`: İşe alım tarihi (YYYY-MM-DD formatında)

Bu sınıfın şu metodları olmalı:

- `yearsWorked()`: Çalışanın işe başladığından beri kaç yıl çalıştığını döndürmeli.
- `info()`: Çalışanın adı, pozisyonu ve çalıştığı süreyi içeren bir açıklama döndürmeli. Örneğin: `"Ali, Yazılım Mühendisi olarak 3 yıldır çalışıyor."`

Örnek:

```js
const employee = new Employee("Ali", "Software Engineer", 80000, "2020-03-15");

console.log(employee.yearsWorked()); // 3 (şu anki yıla göre)
console.log(employee.info()); // Ali, Yazılım Mühendisi olarak 3 yıldır çalışıyor.
```

---

Bu sorular, yukarıdaki gibi sınıf yapısını anlamanıza ve pratik yapmanıza yardımcı olacaktır.