Yukarıdaki kod parçaları, **JavaScript** ve **OOP (Nesne Yönelimli Programlama)** kavramlarını karşılaştırmalı olarak açıklayan bir yapıda hazırlanmış. Kodlarda üç farklı yaklaşım ele alınmış:

1. **Fonksiyon Tabanlı Programlama (Functions-Based Programming)**
2. **Objeye Dayalı Yapı (Object-Based Programming)**
3. **OOP Prensipleri (Object-Oriented Programming)**

Aşağıda bu kodların her birini ve çalışma mantığını detaylı bir şekilde açıklıyorum.

---

## 1. **Fonksiyon Tabanlı Programlama**

Fonksiyon tabanlı programlama, herhangi bir nesne yapısı olmadan doğrudan fonksiyonları kullanarak işlemleri gerçekleştirmektir. Bu yöntem, küçük ve basit hesaplamalar için oldukça kullanışlıdır.

### Kod ve Açıklama:

```javascript
const getPayment = (base, overtime, hourlyIncome) => {
    return payment = base + (overtime * hourlyIncome);
};
console.log(getPayment(3000, 10, 18.75)); // 3187.5
```

- **Parametreler**:
  - `base`: Çalışanın sabit maaşı (örneğin, 3000 birim).
  - `overtime`: Fazla mesai saati (örneğin, 10 saat).
  - `hourlyIncome`: Saatlik ücret (örneğin, 18.75 birim).

- **Hesaplama Mantığı**:
  - Toplam ödeme şu formül ile hesaplanır:
    ```javascript
    payment = base + (overtime * hourlyIncome);
    ```
  - Burada fazla mesai saatleri `overtime` ile saatlik ücret çarpılarak fazla mesai ödemesi bulunur. Daha sonra bu değer sabit maaşa (`base`) eklenir.

- **Çıktı**:
  ```plaintext
  3187.5
  ```

**Not**: Bu yaklaşım basittir, ancak daha karmaşık durumlarda `base`, `overtime` gibi verilerin yönetimi zor olabilir.

---

## 2. **Objeye Dayalı Programlama (Object-Based Programming)**

Burada bir nesne (`employee`) tanımlanır ve o nesneye ait bir `getPayment` metodu ile ödeme hesaplanır. Bu yöntem, veriler ve işlemleri (fonksiyonları) bir arada tutmayı sağlar.

### Kod ve Açıklama:

```javascript
let employee = {
    base: 3000,
    overtime: 10,
    hourlyIncome: 18.75,
    getPayment: function() {
        return this.base + (this.overtime * this.hourlyIncome);
    }
};

console.log(employee.getPayment()); // 3187.5
```

- **Yapı**:
  - `employee` nesnesi, bir çalışanın maaşı ve fazla mesai bilgilerini tutar.
  - `getPayment` metodu, bu bilgileri kullanarak ödeme hesaplar.

- **`this` Kullanımı**:
  - `this.base`, `this.overtime` gibi ifadeler, `employee` nesnesine ait verilere erişim sağlar.
  - Bu yapı, her nesne örneğinin kendi verilerini taşımasını ve bu verilere özel işlemler yapılmasını sağlar.

- **Avantajları**:
  - Veriler ve işlemler aynı nesne içinde olduğundan, fonksiyona dışarıdan parametre geçirmeye gerek kalmaz.
  - Kod daha düzenli ve anlaşılır hale gelir.

- **Çıktı**:
  ```plaintext
  3187.5
  ```

---

## 3. **OOP Prensipleri (Object-Oriented Programming)**

OOP yaklaşımında `class` yapısı kullanılır. Veriler ve işlemler, bir sınıf içinde tanımlanır ve bu sınıftan örnekler (`instance`) oluşturularak işlem yapılır. Ayrıca, miras (inheritance) özelliği ile bir sınıf başka bir sınıftan özellikler devralabilir.

---

### 3.1 **Temel Sınıf Kullanımı**

```javascript
class Employee {
    constructor(base, overtime, hourlyIncome) {
        this.base = base;
        this.overtime = overtime;
        this.hourlyIncome = hourlyIncome;
    }
    getPayment() {
        return this.base + (this.overtime * this.hourlyIncome);
    }
}

const florian = new Employee(3000, 10, 18.75);
console.log(florian.getPayment()); // 3187.5
```

- **Sınıf Tanımı**:
  - `Employee` sınıfı, bir çalışanın maaş ve mesai bilgilerini tutar.
  - `getPayment` metodu, çalışanın toplam maaşını hesaplar.

- **Kullanım**:
  - `new Employee(3000, 10, 18.75)` ifadesi ile bir `Employee` örneği oluşturulur (`florian`).
  - `florian.getPayment()` çağrılarak, o çalışanın maaşı hesaplanır.

- **Avantajları**:
  - Tekrarlanabilirlik: `Employee` sınıfından istediğiniz kadar çalışan nesnesi türetebilirsiniz.
  - Daha modüler ve organize bir yapı sunar.

- **Çıktı**:
  ```plaintext
  3187.5
  ```

---

### 3.2 **Miras (Inheritance) Kullanımı**

```javascript
class Informatiker extends Employee {
    getComputerScientistPayment() {
        return (this.base + (this.overtime * this.hourlyIncome)) * 1.2;
    }
}

const florianInformatiker = new Informatiker(3000, 10, 18.75);
console.log(florianInformatiker.getComputerScientistPayment()); // 3825
```

- **Inheritance (Miras)**:
  - `Informatiker` sınıfı, `Employee` sınıfından türetilir. Bu, `Informatiker` sınıfının `Employee` özelliklerini devraldığı anlamına gelir.
  - `super()` ile `Employee` sınıfının `constructor` (kurucu) metodu çağrılır.

- **Yeni Metot Ekleme**:
  - `getComputerScientistPayment()` metodu, bir çalışanın maaşına %20 zam ekleyerek yeni bir maaş hesaplar.

- **Kullanım**:
  - `new Informatiker(3000, 10, 18.75)` ile bir `Informatiker` örneği oluşturulur.
  - Bu örnek, hem `Employee` sınıfının metotlarına erişebilir hem de kendi metotlarını çağırabilir.

- **Çıktı**:
  ```plaintext
  3825
  ```

---

## OOP Yaklaşımının Avantajları

1. **Kodun Tekrar Kullanılabilirliği**: Bir sınıfı miras alarak başka sınıflarda kullanabilirsiniz.
2. **Modülerlik**: Veriler ve işlemler organize bir şekilde tanımlanır.
3. **Genişletilebilirlik**: Yeni özellikler kolayca eklenebilir.
4. **Kapsülleme**: Veriler gizlenebilir ve dış dünyadan kontrolsüz erişim engellenir.

---

## Genel Çıkarımlar

- Fonksiyon tabanlı programlama, basit işlemler için uygun olsa da, karmaşık yapılar için sınırlıdır.
- Obje tabanlı programlama, veriler ve işlemleri bir arada tutarak daha organize bir yapı sunar.
- OOP, miras ve kapsülleme gibi özellikleri sayesinde geniş çaplı projelerde tercih edilir.

Yukarıdaki örnekler, OOP prensiplerini anlamak ve uygulamak için temel bir başlangıç sağlar. Ders notlarınızın örneklerini adım adım çalışarak OOP kavramlarını pekiştirebilirsiniz. 🎯