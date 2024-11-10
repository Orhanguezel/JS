Elbette, `categoryData` yapısına dayanarak `reduce` ve `sort` soruları hazırladım. Bu sorularla `categoryData` içindeki bilgileri analiz edebilirsin.

### Reduce Soruları

1. **Görev:** `categoryData` içindeki tüm ürünlerin toplam fiyatını hesaplayın.
   ```javascript
   // Örnek başlangıç
   const totalPrice = categoryData.subcategories.reduce((acc, subcategory) => {
     // Devam et
   }, 0);
   ```

2. **Görev:** Tüm `Gefüllte Pizzabrötchen` isimli ürünlerin toplam fiyatını hesaplayın.
   ```javascript
   // Örnek başlangıç
   const totalPriceGefuellte = categoryData.subcategories.reduce((acc, subcategory) => {
     // Devam et
   }, 0);
   ```

3. **Görev:** `categoryData` içindeki her `subcategory` için ürün sayısını bulun ve her `subcategory` adını ürün sayısıyla birlikte bir nesnede saklayın.
   ```javascript
   // Örnek başlangıç
   const itemCountPerCategory = categoryData.subcategories.reduce((acc, subcategory) => {
     // Devam et
   }, {});
   ```

4. **Görev:** Her `subcategory` içinde bulunan tüm `extra` seçeneklerinin toplam fiyatını hesaplayın.
   ```javascript
   // Örnek başlangıç
   const totalExtrasPrice = categoryData.subcategories.reduce((acc, subcategory) => {
     // Devam et
   }, 0);
   ```

5. **Görev:** `categoryData` içindeki tüm ürünlerde yer alan `allergene` listesini birleştirip, tekrarlananları sadece bir kez gösterecek şekilde bir liste oluşturun.
   ```javascript
   // Örnek başlangıç
   const allAllergenes = categoryData.subcategories.reduce((acc, subcategory) => {
     // Devam et
   }, []);
   ```

---

### Sort Soruları

1. **Görev:** `categoryData` içindeki tüm ürünleri fiyatlarına göre artan sırayla sıralayın.
   ```javascript
   // Örnek başlangıç
   const sortedByPrice = categoryData.subcategories.flatMap(sub => sub.items).sort((a, b) => a.prices.default - b.prices.default);
   ```

2. **Görev:** `categoryData` içindeki ürünleri isimlerine göre alfabetik sıraya göre sıralayın.
   ```javascript
   // Örnek başlangıç
   const sortedByName = categoryData.subcategories.flatMap(sub => sub.items).sort((a, b) => a.name.localeCompare(b.name));
   ```

3. **Görev:** `categoryData` içinde her `subcategory`yi içerdiği ürün sayısına göre büyükten küçüğe doğru sıralayın.
   ```javascript
   // Örnek başlangıç
   const sortedByItemCount = categoryData.subcategories.sort((a, b) => b.items.length - a.items.length);
   ```

4. **Görev:** `categoryData` içindeki `extras` fiyatlarına göre `subcategory`lerin ürünlerini büyükten küçüğe doğru sıralayın.
   ```javascript
   // Örnek başlangıç
   const sortedByExtrasPrice = categoryData.subcategories.flatMap(sub => sub.items).sort((a, b) => {
     const maxExtraA = Math.max(...Object.values(a.extras || {}));
     const maxExtraB = Math.max(...Object.values(b.extras || {}));
     return maxExtraB - maxExtraA;
   });
   ```

5. **Görev:** `categoryData` içindeki tüm `subcategory`leri `name` özelliklerine göre alfabetik sırayla sıralayın.
   ```javascript
   // Örnek başlangıç
   const sortedSubcategoriesByName = categoryData.subcategories.sort((a, b) => a.name.localeCompare(b.name));
   ```

Bu sorular, `categoryData` verisini analiz etme ve düzenleme konusunda oldukça kapsamlı bir pratik sağlar. Her bir sorunun çözümünü deneyerek `reduce` ve `sort` metotlarıyla veri manipülasyonunu öğrenebilirsin.