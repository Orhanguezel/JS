### 1. Was sind `Klassen`?

JavaScript'te `class`, nesne tabanlı programlama (OOP) paradigminde kullanılan ve bir nesne için şablon oluşturan bir yapıdır. `class` yapıları, aynı tipte birçok nesne oluşturmayı kolaylaştırır. Bir `class`, nesnenin özelliklerini (`properties`) ve onunla yapılabilecek işlemleri (`methods`) tanımlar. Örneğin, bir `Person` sınıfı, bir kişinin `ad`, `yaş` gibi özelliklerini ve `selamla()` gibi işlemlerini içerebilir.

Örnek bir sınıf:

```javascript
class Person {
    constructor(name, age) {   // Yapıcı fonksiyon
        this.name = name;
        this.age = age;
    }

    greet() {  // Method (yöntem)
        return `Merhaba, benim adım ${this.name} ve ${this.age} yaşındayım.`;
    }
}

const person1 = new Person("Ahmet", 30);
console.log(person1.greet()); // Merhaba, benim adım Ahmet ve 30 yaşındayım.
```

### 2. Was ist `OOP`?

OOP (Objektorientierte Programmierung) ya da Nesne Yönelimli Programlama, yazılım geliştirmede bir yaklaşımdır. OOP, verileri ve işlemleri `nesneler` aracılığıyla düzenlemeyi amaçlar. Bu yaklaşım, programın parçalarını `nesneler` ve `sınıflar` halinde düzenleyerek daha modüler ve sürdürülebilir kod yazmayı kolaylaştırır. Nesneler, belirli bir `class`'in örneği olarak yaratılır ve o `class`'te tanımlı özellik ve yöntemleri içerir.

OOP'nin temel kavramları şunlardır:
- **Encapsulation (Kapsülleme)**: Bir nesnenin verilerini ve işlevlerini saklama; dışarıdan müdahale etmeyi engelleme.
- **Inheritance (Kalıtım)**: Bir sınıfın, başka bir sınıftan özellikleri ve yöntemleri devralabilmesi.
- **Polymorphism (Çok Biçimlilik)**: Aynı yöntem adının farklı sınıflarda farklı işlevler gösterebilmesi.
- **Abstraction (Soyutlama)**: Karmaşıklığı gizleyip yalnızca gerekli detayları öne çıkarma.

Örneğin, `Person` sınıfından türeyen `Student` ve `Teacher` sınıfları olabilir. `Student` ve `Teacher`, `Person` sınıfının özelliklerine sahip olurken, kendine özel özellikler de ekleyebilir.

```javascript
class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);  // Üst sınıfın özelliklerini devralır
        this.studentID = studentID;
    }

    study() {
        return `${this.name} ders çalışıyor.`;
    }
}

const student1 = new Student("Ali", 21, "12345");
console.log(student1.greet());   // Merhaba, benim adım Ali ve 21 yaşındayım.
console.log(student1.study());   // Ali ders çalışıyor.
```

### 3. Wo wird am meistens `OOP` Benutzt (sprachen)?

OOP, birçok programlama dilinde popüler bir yaklaşımdır. Bazı yaygın kullanılan OOP dilleri şunlardır:
- **JavaScript**: Web geliştirmede yaygın olarak kullanılır ve sınıf tabanlı yapı ile nesne yönelimli programlamayı destekler.
- **Java**: Sınıf tabanlı ve nesne yönelimli yapı ile güçlü bir dildir. Genellikle büyük ölçekli uygulamalarda tercih edilir.
- **Python**: OOP desteğiyle birlikte sade bir sözdizimi sunar. Veri analitiği, yapay zeka, bilimsel çalışmalar gibi birçok alanda kullanılır.
- **C++**: Hem prosedürel hem de nesne yönelimli yapıyı destekleyen bir dildir.
- **C#**: Microsoft tarafından geliştirilmiş, özellikle .NET ortamında yaygın kullanılan bir dildir.

---

### Örnek Sorular

1. **Class Tanımlama ve Nesne Oluşturma**  
   Bir `Car` sınıfı tanımlayın. Bu sınıfta `model`, `yıl` ve `renk` özellikleri bulunsun. Ayrıca `drive()` adında bir method tanımlayın ve bu method `"Araba sürülüyor"` döndürsün. `Car` sınıfından bir `car1` nesnesi oluşturup `drive()` metodunu çağırın.

2. **Inheritance (Kalıtım)**  
   Bir `Animal` sınıfı oluşturun. Bu sınıf `name` ve `age` özelliklerine sahip olsun. `speak()` adında bir method tanımlayın ve `"Hayvan konuşuyor"` döndürsün. Sonra `Dog` sınıfını, `Animal` sınıfından türetin ve `speak()` metodunu `"Köpek havlıyor"` olarak güncelleyin.

3. **Encapsulation (Kapsülleme)**  
   Bir `BankAccount` sınıfı tanımlayın. `balance` özelliğini `private` yapın. Sınıfa `deposit()` ve `withdraw()` adında iki method ekleyin. `deposit()` methodu ile paranın eklenmesine, `withdraw()` methodu ile çekilmesine izin verin. `balance` doğrudan değiştirilemesin.

4. **Polymorphism (Çok Biçimlilik)**  
   `Shape` adında bir sınıf oluşturun ve `calculateArea()` methodunu tanımlayın. `Rectangle` ve `Circle` sınıflarını `Shape`'den türetin ve her birinde `calculateArea()` metodunu farklı şekilde uygulayın.

5. **Class içinde Class Kullanımı**  
   `Library` ve `Book` adında iki sınıf oluşturun. `Library`, bir kitap listesi (books) içersin. `addBook()` ve `listBooks()` methodlarını kullanarak kütüphaneye kitap ekleyin ve listeleyin.

Bu örnek sorularla OOP’nin temel kavramlarını daha derinlemesine inceleyebilirsin.