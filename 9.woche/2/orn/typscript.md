# TypeScript'e Kapsamlı Giriş

TypeScript, JavaScript'in üzerine inşa edilmiş bir programlama dilidir ve statik tiplerle JavaScript'e yeni bir boyut kazandırır. Microsoft tarafından geliştirilmiş olan TypeScript, özellikle büyük ölçekli projelerde kodun daha anlaşılır, güvenilir ve sürdürülebilir olmasını sağlar. Bu dokümanda, TypeScript'in temel özellikleri, faydaları, kurulumu, syntax özellikleri, ileri düzey özellikleri ve en iyi kullanım alanları üzerine kapsamlı bilgiler sunulacaktır.

---

## İçindekiler

1. [TypeScript Nedir?](#typescript-nedir)
2. [Neden TypeScript?](#neden-typescript)
3. [Kurulum](#kurulum)
4. [Temel Syntax ve Tipler](#temel-syntax-ve-tipler)
5. [Fonksiyonlar](#fonksiyonlar)
6. [Sınıflar ve Nesneler](#sınıflar-ve-nesneler)
7. [Gelişmiş Özellikler](#gelişmiş-özellikler)
8. [TypeScript ile JavaScript Arasındaki Farklar](#typescript-ile-javascript-arasındaki-farklar)
9. [TypeScript ile En İyi Uygulamalar](#typescript-ile-en-iyi-uygulamalar)
10. [Sonuç](#sonuç)

---

## TypeScript Nedir?

TypeScript, JavaScript'in tüm özelliklerini barındıran ve ona tip güvenliği, sınıf tabanlı nesne yönelimli programlama, arabirimler gibi ek özellikler katan açık kaynaklı bir dildir. JavaScript'e çok benzer ve `.ts` dosya uzantısıyla yazılır. TypeScript, JavaScript'e derlenir, bu sayede TypeScript ile yazılmış kodlar tüm JavaScript ortamlarında çalıştırılabilir.

## Neden TypeScript?

TypeScript, JavaScript'in dinamik yapısından kaynaklanan hataları minimize eder ve aşağıdaki avantajları sunar:

- **Statik Tip Denetimi**: Kod yazım sürecinde veri tipleri belirtilir, bu da hataların derleme aşamasında yakalanmasını sağlar.
- **Kod Tamamlama ve Otomatik Düzeltme**: IDE desteği sayesinde kod tamamlama ve otomatik hata düzeltme sağlanır.
- **Nesne Yönelimli Programlama Desteği**: Sınıflar, arayüzler ve miras gibi nesne yönelimli özellikler içerir.
- **Okunabilirlik ve Bakım Kolaylığı**: Kodun daha anlaşılır ve sürdürülebilir olmasını sağlar.

---

## Kurulum

TypeScript'i kullanmaya başlamak için öncelikle sisteminizde Node.js'in kurulu olması gerekir. Ardından, TypeScript'i global olarak kurabilirsiniz:

```bash
npm install -g typescript
```

Kurulumun ardından TypeScript dosyalarını `.ts` uzantısıyla yazabilir ve bu dosyaları JavaScript'e derlemek için `tsc` (TypeScript Compiler) komutunu kullanabilirsiniz:

```bash
tsc dosyaAdi.ts
```

---

## Temel Syntax ve Tipler

TypeScript'te tipler, değişkenlerin ve fonksiyonların türlerini belirlemek için kullanılır. Aşağıda TypeScript'in temel tipleri ve kullanımları bulunmaktadır.

### Temel Veri Tipleri

- **string**: Metin verilerini ifade eder.
- **number**: Sayısal veriler.
- **boolean**: Mantıksal doğruluk belirten `true` veya `false` değeri.
- **array**: Farklı veya aynı türde elemanları içerebilir.
- **tuple**: Sabit sayıda eleman içeren bir dizidir.
- **enum**: Sabit değerlerin bir listesini temsil eder.
- **any**: Herhangi bir veri tipini kabul eder.

**Örnekler:**

```typescript
let isim: string = "Ali";
let yas: number = 25;
let ogrenci: boolean = true;
let numaralar: number[] = [1, 2, 3];
let tuple: [string, number] = ["John", 24];
enum Renkler { Kirmizi, Yesil, Mavi }
let renk: Renkler = Renkler.Kirmizi;
```

---

## Fonksiyonlar

TypeScript fonksiyonların parametreleri ve dönüş tipleri açıkça tanımlanabilir.

**Temel Kullanım:**

```typescript
function topla(a: number, b: number): number {
    return a + b;
}
```

**Opsiyonel ve Varsayılan Parametreler:**

```typescript
function merhaba(isim: string, yas?: number): string {
    return yas ? `${isim}, ${yas} yaşında` : `Merhaba, ${isim}`;
}
```

**Arrow Fonksiyonlar:**

```typescript
const carp = (a: number, b: number): number => a * b;
```

---

## Sınıflar ve Nesneler

TypeScript, nesne yönelimli programlama için sınıf yapısını içerir ve `public`, `private`, `protected` erişim belirleyicileri kullanarak kapsüllemeyi sağlar.

**Sınıf Tanımı:**

```typescript
class Araba {
    private marka: string;
    model: string;
    constructor(marka: string, model: string) {
        this.marka = marka;
        this.model = model;
    }

    bilgi(): string {
        return `${this.marka} ${this.model}`;
    }
}

const araba = new Araba("Toyota", "Corolla");
console.log(araba.bilgi());
```

---

## Gelişmiş Özellikler

TypeScript, gelişmiş yapılar sunarak yazılımın daha modüler ve güvenli olmasını sağlar.

### Arayüzler (Interfaces)

Arayüzler, nesnelerin yapısını tanımlar ve tip denetimini destekler.

```typescript
interface Kisi {
    ad: string;
    yas: number;
    konus(): void;
}

const kisi: Kisi = {
    ad: "Ali",
    yas: 30,
    konus: () => console.log("Merhaba!")
};
```

### Generics (Türler)

Generics, sınıflar ve fonksiyonlar için esnek türler belirlemeyi sağlar.

```typescript
function ekle<T>(deger: T): T {
    return deger;
}

let sayi = ekle<number>(5);
let metin = ekle<string>("Merhaba");
```

### Modüller

Kodunuzu daha iyi organize etmek için modüller kullanabilirsiniz.

**Örnek:**

```typescript
// utils.ts
export function topla(a: number, b: number): number {
    return a + b;
}

// main.ts
import { topla } from "./utils";
console.log(topla(3, 4));
```

### Tip Birleşimleri (Union ve Intersection Types)

- **Union**: Değişkenin birden fazla türde değer alabileceğini belirtir.

    ```typescript
    let kimlik: string | number;
    kimlik = "12345";
    kimlik = 12345;
    ```

- **Intersection**: Bir nesnenin birden fazla tür özelliklerini içermesini sağlar.

    ```typescript
    interface Kisi {
        isim: string;
    }
    interface Calisan {
        calisiyor: boolean;
    }

    type CalisanKisi = Kisi & Calisan;

    const ali: CalisanKisi = { isim: "Ali", calisiyor: true };
    ```

---

## TypeScript ile JavaScript Arasındaki Farklar

| Özellik             | JavaScript                                      | TypeScript                                               |
|---------------------|-------------------------------------------------|----------------------------------------------------------|
| Tip Kontrolü        | Dinamik                                         | Statik                                                   |
| Erişim Belirleyicileri | Yok                                           | `public`, `private`, `protected`                         |
| Derleme Aşaması     | Yok                                             | `tsc` kullanılarak derlenir                              |
| Arayüzler           | Yok                                             | `interface`                                              |
| Modül Desteği       | `import/export` ile ES6                         | ES6 modülleri desteklenir                                |
| IDE Desteği         | Kısıtlı kod tamamlama                           | Gelişmiş kod tamamlama ve hata denetimi                  |

---

## TypeScript ile En İyi Uygulamalar

1. **Tip Belirleyici Kullanın**: Mümkün olduğunca her değişken, fonksiyon ve sınıf için tip belirleyiciler kullanın.
2. **Arayüzlerden Faydalanın**: Nesne türlerini belirtmek için arayüzleri kullanın, bu kodun okunabilirliğini artırır.
3. **Generics Kullanımı**: Kodun tekrar kullanımını artırmak için `Generics` ile tür belirtin.
4. **Kapsam ve Erişim Belirleyicilerini Kullanın**: Özellikle büyük projelerde `private`, `protected` erişim belirleyicilerini kullanarak veriyi kapsülleyin.
5. **Modüler Yapı**: Projeyi daha modüler ve yönetilebilir hale getirmek için dosyaları `import/export` kullanarak bölün.

---

## Sonuç

TypeScript, JavaScript’e güçlü bir tip sistemi, nesne yönelimli programlama destekleri ve hata ayıklamayı kolaylaştıran araçlar ekleyerek geliştir

icilere daha iyi bir geliştirme deneyimi sunar. Büyük ölçekli projelerde kodun daha güvenli ve bakımı kolay bir şekilde yapılandırılmasına olanak tanır. TypeScript’in sunduğu bu özellikler, modern web ve mobil uygulama geliştirme projelerinde oldukça kullanışlıdır ve gün geçtikçe popülerliği artmaktadır.

TypeScript ile çalışmak, yazılımın daha sürdürülebilir ve anlaşılır olmasını sağlarken aynı zamanda geliştirici hatalarını azaltarak daha hızlı geliştirme döngüleri sunar.