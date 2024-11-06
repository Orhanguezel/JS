İşte haritalama (map) konusunda benzer 10 görev:

### Görev 1

Aşağıdaki diziye `map()` yöntemini uygulayarak, her ürünün fiyatının %10 indirimli halini içeren yeni bir dizi oluşturun.

```javascript
const products = [
  { name: "Laptop", price: 999 },
  { name: "Telefon", price: 499 },
  { name: "Tablet", price: 299 },
];

const discountedPrices = products;
// Beklenen Çıktı: [{ name: "Laptop", price: 899.1 }, { name: "Telefon", price: 449.1 }, { name: "Tablet", price: 269.1 }]
```

### Görev 2

Aşağıdaki dizideki ürünlerin adlarını büyük harfle başlatın ve yeni bir dizi oluşturun.

```javascript
const products = ["t-shirt", "jeans", "hat", "sneakers"];

const capitalizedProducts = products;
// Beklenen Çıktı: ["T-shirt", "Jeans", "Hat", "Sneakers"]
```

### Görev 3

Aşağıdaki diziye `map()` yöntemini uygulayarak, her ürünün adını ve fiyatını içeren açıklayıcı bir dize oluşturun.

```javascript
const products = [
  { name: "Laptop", price: 999 },
  { name: "Telefon", price: 499 },
];

const productDescriptions = products;
// Beklenen Çıktı: ["Laptop: 999$", "Telefon: 499$"]
```

### Görev 4

Aşağıdaki diziyi `map()` yöntemi ile kullanarak, her sayının karesini içeren yeni bir dizi oluşturun.

```javascript
const numbers = [1, 2, 3, 4, 5];

const squares = numbers;
// Beklenen Çıktı: [1, 4, 9, 16, 25]
```

### Görev 5

Aşağıdaki dizideki kişilerin yaşlarını birer yıl artırarak yeni bir dizi oluşturun.

```javascript
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const updatedAges = persons;
// Beklenen Çıktı: [{ name: "Alice", age: 26 }, { name: "Bob", age: 31 }]
```

### Görev 6

Aşağıdaki dizideki hayvanların isimlerini "Hayvan: [isim]" formatında dönen yeni bir dizi oluşturun.

```javascript
const animals = ["kedi", "köpek", "kuş"];

const animalDescriptions = animals;
// Beklenen Çıktı: ["Hayvan: kedi", "Hayvan: köpek", "Hayvan: kuş"]
```

### Görev 7

Aşağıdaki dizideki isimlerin her birini "Merhaba, [isim]!" şeklinde bir dize haline getiren yeni bir dizi oluşturun.

```javascript
const names = ["Ali", "Ayşe", "Mehmet"];

const greetings = names;
// Beklenen Çıktı: ["Merhaba, Ali!", "Merhaba, Ayşe!", "Merhaba, Mehmet!"]
```

### Görev 8

Aşağıdaki dizideki sayıların çift olup olmadığını kontrol eden bir dizi oluşturun.

```javascript
const numbers = [1, 2, 3, 4, 5];

const isEvenArray = numbers;
// Beklenen Çıktı: [false, true, false, true, false]
```

### Görev 9

Aşağıdaki dizideki kelimelerin uzunluğunu içeren yeni bir dizi oluşturun.

```javascript
const words = ["JavaScript", "Python", "C++"];

const wordLengths = words;
// Beklenen Çıktı: [10, 6, 3]
```

### Görev 10

Aşağıdaki dizideki kitapların başlıklarını ve yazarlarını bir dize içinde birleştiren yeni bir dizi oluşturun.

```javascript
const books = [
  { title: "Sapiens", author: "Yuval Noah Harari" },
  { title: "1984", author: "George Orwell" },
];

const bookDescriptions = books;
// Beklenen Çıktı: ["Sapiens - Yuval Noah Harari", "1984 - George Orwell"]
```

Bu görevleri `map()` fonksiyonunu kullanarak çözebilirsiniz!