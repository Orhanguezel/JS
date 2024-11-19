TypeScript'te dosyadaki her değişikliği izlemesi ve otomatik olarak JavaScript'e dönüştürmesi için şu adımları izleyebilirsiniz:

---

### **1. TypeScript'i Kurun**
Eğer kurulu değilse, `typescript` paketini global olarak kurun:

```bash
npm install -g typescript
```

Kurulumdan sonra sürümü kontrol edin:

```bash
tsc --version
```

---

### **2. TypeScript Projesi Başlatın**
Projenizin kök dizininde bir `tsconfig.json` dosyası oluşturun. Bu dosya TypeScript'in nasıl çalışacağını tanımlar. 

Otomatik olarak oluşturmak için şu komutu kullanabilirsiniz:

```bash
tsc --init
```

Oluşturulan `tsconfig.json` dosyasında aşağıdaki ayarları kontrol edin veya güncelleyin:

```json
{
  "compilerOptions": {
    "target": "es5", // JavaScript çıktısının hangi sürümde olacağını belirler
    "module": "commonjs", // Modül sistemi
    "outDir": "./dist", // JavaScript dosyalarının çıkış dizini
    "rootDir": "./src", // TypeScript dosyalarının kaynak dizini
    "strict": true, // Sıkı tür denetimi
    "esModuleInterop": true // ES modülleriyle uyumluluk
  },
  "include": ["src"], // Hangi dosyalar derlenecek
  "exclude": ["node_modules"] // Hariç tutulacak dosyalar
}
```

---

### **3. `watch` Modunda Çalıştırın**
TypeScript derleyicisinin (TSC) değişiklikleri izlemesi için şu komutu çalıştırın:

```bash
tsc --watch
tsc -w
```

Bu komut, TypeScript dosyalarını (`.ts`) izler ve her değişiklik olduğunda otomatik olarak JavaScript'e (`.js`) dönüştürür.

---

### **4. Proje Yapısı Örneği**
```plaintext
my-project/
│
├── src/
│   ├── index.ts
│   └── app.ts
│
├── dist/
│   ├── index.js
│   └── app.js
│
├── tsconfig.json
├── package.json
```

- **`src/`**: TypeScript dosyalarınız.
- **`dist/`**: JavaScript çıktılarınız.

---

### **5. Ekstra: Node.js ile TypeScript Çalıştırma**
Eğer TypeScript dosyalarınızı doğrudan çalıştırmak istiyorsanız, `ts-node` paketini kullanabilirsiniz:

```bash
npm install -g ts-node
```

Daha sonra şu şekilde çalıştırabilirsiniz:

```bash
ts-node src/index.ts
```

---

### **6. Paket Scriptleri ile Kolaylaştırma**
`package.json` dosyanıza aşağıdaki script'leri ekleyebilirsiniz:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "watch": "tsc --watch"
}
```

Daha sonra şu komutları kullanabilirsiniz:

- Projeyi derlemek için: `npm run build`
- İzleme modunda çalıştırmak için: `npm run watch`

---

Bu adımları izlediğinizde, TypeScript dosyalarındaki her değişiklik otomatik olarak JavaScript'e dönüştürülür. Kodlarınızın çıktılarını `dist` dizininde görebilirsiniz.