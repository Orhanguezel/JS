**Class Inheritance (Sınıf Mirası)**, JavaScript’te bir sınıfın özelliklerini başka bir sınıfa aktarma işlemidir. Bu özellik, **nesne tabanlı programlamada (OOP)**, daha karmaşık yapıların oluşturulmasını sağlar ve kodun tekrar kullanılabilirliğini artırır.

## 1. Class Inheritance Nedir?
Class Inheritance, bir sınıfın (üst sınıf veya parent class) özelliklerini ve metodlarını başka bir sınıfa (alt sınıf veya child class) aktarmak için kullanılır. Bu şekilde, yeni sınıf (alt sınıf) üst sınıfın tüm özelliklerine sahip olur, ayrıca kendi özel özelliklerini ve metodlarını da ekleyebilir.

### Örneğin:
Bir `Person` sınıfımız varsa, `Employee` adında bir sınıf türetebiliriz. `Employee` sınıfı, `Person` sınıfının özelliklerini miras alır ve bu özelliklere ek olarak kendi özelliklerine de sahip olabilir (örneğin `salary` gibi).

## 2. **extends** ve **super** Anahtar Kelimeleri

### `extends` Anahtar Kelimesi
Bir sınıfı miras almak için **extends** anahtar kelimesi kullanılır. `extends` ile belirtilen sınıf, alt sınıfın üst sınıfı olur ve tüm özellikleri ve metodları miras bırakır.

### `super` Anahtar Kelimesi
- **super()** fonksiyonu, üst sınıfın yapıcı metodunu (constructor) çağırmak için kullanılır.
- **super** anahtar kelimesi, üst sınıfın metodlarına ve özelliklerine erişmek için kullanılır.

`super()` ifadesi, miras alan sınıfın yapıcı metodunda **ilk satırda** çağrılmalıdır. Çünkü `super()` çağrılmadan önce `this` kullanılamaz.

### Örnek:
Bir `Person` sınıfı ve bu sınıfı miras alan bir `Employee` sınıfı oluşturalım.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age); // Person sınıfının constructor'ını çağırır.
        this.salary = salary;
    }
    
    work() {
        return `${this.name} is working and earns ${this.salary} annually.`;
    }
}

const emp1 = new Employee("Alice", 30, 60000);

console.log(emp1.introduce()); // Hello, my name is Alice and I am 30 years old.
console.log(emp1.work());      // Alice is working and earns 60000 annually.
```

### Bu Örnekte:
1. **Person** sınıfı, `name` ve `age` özelliklerini tutuyor ve bir `introduce` metodu var.
2. **Employee** sınıfı, `Person` sınıfını miras alır (extends) ve `salary` özelliğini ekler. Ayrıca kendi metodu olan `work()` ile çalıştığı durumu açıklar.
3. `super(name, age)`, üst sınıf `Person`'ın constructor'ını çağırır ve `name` ve `age` özelliklerini başlatır.

## Class Inheritance’in Avantajları

1. **Kod Tekrarını Azaltır**: Miras sayesinde aynı özellikleri yeniden tanımlamaya gerek kalmaz.
2. **Modüler Yapı**: Kodun daha modüler ve organize olmasını sağlar.
3. **Bakım Kolaylığı**: Kodda değişiklik yapmak kolaylaşır çünkü ortak özellikler tek bir üst sınıfta düzenlenebilir.

## Detaylı Örnek: Employee ve Manager

Daha karmaşık bir örnekle, `Employee` ve `Manager` sınıflarını inceleyelim. Bu örnekte `Manager`, `Employee` sınıfını miras alacak ve ek özelliklere sahip olacak.

```javascript
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails() {
        return `${this.name} works as a ${this.position} and earns ${this.salary} annually.`;
    }
}

class Manager extends Employee {
    constructor(name, position, salary, department) {
        super(name, position, salary); // Employee constructor'ını çağırır
        this.department = department;
    }

    getDetails() {
        // super.getDetails() ile üst sınıfın metodunu çağırıyoruz
        return `${super.getDetails()} They manage the ${this.department} department.`;
    }

    assignTask(employee, task) {
        return `${this.name} assigned the task '${task}' to ${employee.name}.`;
    }
}

const emp1 = new Employee("Bob", "Developer", 50000);
const manager1 = new Manager("Alice", "Manager", 80000, "Development");

console.log(emp1.getDetails()); // Bob works as a Developer and earns 50000 annually.
console.log(manager1.getDetails()); // Alice works as a Manager and earns 80000 annually. They manage the Development department.
console.log(manager1.assignTask(emp1, "Develop new feature")); // Alice assigned the task 'Develop new feature' to Bob.
```

### Açıklama:
1. `Manager` sınıfı, `Employee` sınıfından miras alır, yani `name`, `position` ve `salary` özelliklerine sahip olur.
2. `super(name, position, salary)` ile `Employee` constructor'ını çağırarak bu özellikleri başlatır.
3. `Manager` sınıfında, `getDetails` metodu `super.getDetails()` ile üst sınıfın metodunu çağırarak kendi açıklamasını ekler.
4. Ayrıca, `Manager` sınıfı `assignTask` adında yeni bir metoda sahiptir. Bu metod, belirli bir çalışana (`employee`) görev (`task`) atar.

## Sonuç ve Özet

**Class Inheritance (Sınıf Mirası)**, OOP’de çok önemli bir özelliktir ve kodun daha modüler, temiz ve tekrar kullanılabilir olmasını sağlar. `extends` anahtar kelimesiyle miras alınır, `super` anahtar kelimesiyle ise üst sınıfın constructor ve metodlarına erişilir. Bu özellikler ile projeler daha okunabilir, daha az hatalı ve genişletilebilir hale gelir.