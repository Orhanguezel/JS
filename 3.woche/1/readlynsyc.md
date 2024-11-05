**readline-sync** NPM modülü, Node.js tabanlı uygulamalarda kullanıcıdan senkronize olarak komut satırından (CLI) giriş almayı sağlayan bir araçtır. Kullanıcıya interaktif sorular sorarak uygulamanın veri almasını ve kullanıcıdan gelen cevaplarla uygulamanın işleyişini şekillendirmesini sağlar.

Bu modül, bir GUI arayüzü olmadan terminal tabanlı programlarda etkileşimli kullanıcı girişini kolaylaştırır. **readline-sync** kullanarak, örneğin, kullanıcının yaşını, ismini, veya tercihlerini sorabilir ve cevaplarına göre işlem yapabilirsin.

### **readline-sync** Özellikleri:
- Kullanıcıdan **senkronize** veri girişi alır, yani kullanıcı bir giriş yapana kadar program duraklar ve kullanıcı girişini bekler.
- Giriş almak için **soru sorma** (prompting) özelliği sağlar.
- Farklı **giriş türlerini** destekler: metin, sayılar, seçenekler vs.
- Kullanıcı **onay (yes/no)** sorularını kolayca sorabilir.
  
### **readline-sync** Kurulumu:
1. Projenize **readline-sync** paketini eklemek için terminalde şu komutu çalıştırın:
   ```bash
   npm install readline-sync
   ```

2. Kurulumun ardından bu modülü kullanmak için projeye dahil edebilirsiniz:
   ```javascript
   const readlineSync = require('readline-sync');
   ```

### **readline-sync** Kullanım Örnekleri:

#### 1. Kullanıcıdan Giriş Almak:
Bir kullanıcıdan isim almak ve bu ismi kullanarak bir karşılama mesajı göstermek için:

```javascript
const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);
```

#### 2. Sayısal Giriş Almak:
Kullanıcıdan yaşını sorup sayısal bir giriş alabilirsin:

```javascript
const age = readlineSync.questionInt("How old are you? ");
console.log(`You are ${age} years old.`);
```

#### 3. Yes/No Onay Soruları:
Bir onay sorusu sormak (Evet/Hayır gibi) için **`keyInYN()`** fonksiyonunu kullanabilirsin:

```javascript
const answer = readlineSync.keyInYN("Do you like JavaScript? ");
if (answer) {
    console.log("Great! Keep coding!");
} else {
    console.log("You should give it another try!");
}
```

#### 4. Seçeneklerden Birini Seçmek:
Kullanıcıya birkaç seçenek sunarak bunlardan birini seçtirebilirsiniz:

```javascript
const languages = ['JavaScript', 'Python', 'C++', 'Java'];
const index = readlineSync.keyInSelect(languages, 'Which programming language do you prefer?');

console.log(`You selected: ${languages[index]}`);
```

### Özet:
**readline-sync** NPM paketi, basit ve kullanımı kolay bir araç olup Node.js ile kullanıcıdan terminal üzerinde giriş almak için idealdir. Özellikle interaktif komut satırı uygulamaları yazarken kullanıcı girdileri üzerinde işlem yapmanı sağlar.