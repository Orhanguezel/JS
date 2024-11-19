### TypeScript Temelleri ve Everyday Types

Bu açıklamada, TypeScript'in temellerini ve Everyday Types (Günlük Tipler) adı verilen en yaygın kullanılan tipleri detaylı bir şekilde ele alacağız. Örneklerle açıklamalar yaparak TypeScript'teki kullanımları kolayca anlamanıza yardımcı olacağız.

---

### **1. Temel Primitif Tipler**

JavaScript'te üç temel primitif değer vardır: **string**, **number**, ve **boolean**. TypeScript bu değerleri temsil etmek için aynı isimlere sahip özel tipler sunar:

- **`string`**: String değerlerini temsil eder. Örneğin `"Hello, world"`.
- **`number`**: Sayıları temsil eder. Hem tam sayılar (integer) hem de ondalıklı sayılar (float) için aynı `number` tipi kullanılır.
- **`boolean`**: `true` ve `false` değerlerini temsil eder.

Örnek:

```typescript
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let isCompleted: boolean = true;
```

#### Büyük Harfle Başlayan Türler
`String`, `Number`, ve `Boolean` tipleri yasal olsa da, özel durumlarda kullanılan türlerdir. Genellikle `string`, `number` ve `boolean` kullanılması önerilir.

---

### **2. Diziler (Arrays)**

Bir dizinin türünü belirtmek için şu iki sözdiziminden birini kullanabilirsiniz:

1. `number[]`: Dizi, sadece `number` değerleri içermeli.
2. `Array<number>`: Aynı anlamı taşır.

Örnek:

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["Alice", "Bob", "Charlie"];
```

**Not**: `[number]` ile `number[]` farklıdır. `[number]` bir tuple'dır; bu konuyu ileride detaylandıracağız.

---

### **3. `any` Türü**

`any`, herhangi bir türün yerini alabilir. `any` kullanıldığında TypeScript, tür denetimlerini devre dışı bırakır.

Örnek:

```typescript
let obj: any = { x: 0 };
obj.foo(); // Geçerli
obj = "Hello"; // Geçerli
let n: number = obj; // Geçerli
```

**`noImplicitAny` Ayarı**: Tür belirtilmediğinde TypeScript varsayılan olarak `any` kullanır. `noImplicitAny` bayrağı, bu durumu hata olarak işaretler.

---

### **4. Değişkenlerde Tür Belirtimi**

Değişken tanımlarken tür belirtmek için değişkenin ardından `: tür` eklenir:

```typescript
let myName: string = "Alice";
```

Türkçe Örnek:

```typescript
let kullaniciAdi: string = "Orhan";
```

Çoğu durumda TypeScript, değişkenin türünü otomatik olarak çıkarabilir. Örneğin:

```typescript
let myAge = 30; // TypeScript otomatik olarak `number` olduğunu anlar.
```

---

### **5. Fonksiyonlar**

TypeScript, hem parametrelerin hem de dönüş değerlerinin türlerini belirtmenize olanak tanır.

#### Parametre Türleri:

```typescript
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!");
}
```

Tür uyumsuzluğu durumunda hata alırsınız:

```typescript
greet(42); // Hata: `number`, `string` türüne atanamaz.
```

#### Dönüş Türleri:

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

#### Asenkron Fonksiyonlar:

Bir Promise döndüren fonksiyonlar şu şekilde tanımlanır:

```typescript
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

---

### **6. Anonim Fonksiyonlar**

Anonim fonksiyonlar için TypeScript, bağlamdan türleri çıkarabilir. Örneğin:

```typescript
const names = ["Alice", "Bob", "Eve"];

names.forEach((name) => {
  console.log(name.toUpperCase());
});
```

Bu işlem "bağlamsal tür çıkarımı" (contextual typing) olarak adlandırılır.

---

### **7. Obje Türleri**

Bir objenin sahip olduğu özellikleri ve türlerini tanımlamak için obje türleri kullanılır:

```typescript
function printCoord(pt: { x: number; y: number }) {
  console.log("x:", pt.x);
  console.log("y:", pt.y);
}

printCoord({ x: 3, y: 7 });
```

#### Opsiyonel Özellikler:

Bir özelliğin opsiyonel olduğunu belirtmek için `?` kullanılır:

```typescript
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);
  if (obj.last) {
    console.log(obj.last.toUpperCase());
  }
}

printName({ first: "Alice" });
printName({ first: "Bob", last: "Builder" });
```

---

### **8. Birleşim Türleri (Union Types)**

Bir birleşim türü, birden fazla türden birini kabul edebilir:

```typescript
function printId(id: number | string) {
  console.log("ID:", id);
}

printId(101);
printId("202");
```

Bir birleşim türüyle çalışırken, önce türü daraltmanız gerekir:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

---

### **9. Tür Takma Adları (Type Aliases)**

Bir türü tekrar tekrar kullanmak yerine, ona bir takma ad verebilirsiniz:

```typescript
type Point = { x: number; y: number };

function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}
```

---

### **10. Arabirimler (Interfaces)**

Arabirimler, obje türlerini tanımlamak için kullanılır ve `type` anahtar kelimesine benzer:

```typescript
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}
```

#### Farklar:
- `interface` genişletilebilirken, `type` birleştirilemez.
- `type`, birleşim türleri tanımlayabilir; `interface` bunu yapamaz.

---

### **11. Tür Atamaları (Type Assertions)**

Bir değişkenin türünü TypeScript'e belirtmek için şu yöntemi kullanabilirsiniz:

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

---

### **12. Sabit Türler (Literal Types)**

Belirli bir değeri ifade eden türlerdir:

```typescript
function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s, alignment);
}

printText("Hello", "left");
```

---

### **13. Null ve Undefined**

TypeScript, `null` ve `undefined` değerlerini ayrı türler olarak ele alır. `strictNullChecks` bayrağı açık olduğunda, bu değerler açıkça ele alınmalıdır:

```typescript
function doSomething(x: string | null) {
  if (x !== null) {
    console.log(x.toUpperCase());
  }
}
```

---

### **14. Enums (Sıralı Türler)**

Enum'lar, bir dizi sabit değeri temsil eder:

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
```

---

Bu bilgilerle TypeScript'in temel ve yaygın kullanılan türlerini anladınız. Daha karmaşık türleri öğrenmek için temel kavramları pekiştirmeniz önerilir.