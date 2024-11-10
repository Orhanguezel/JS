Elbette, işte `reduce` ve `sort` metotlarıyla çözmen için onar tane yeni soru. Sorularda diziler İngilizce olacak şekilde, açıklamalar Türkçe yazıldı.

### Reduce Soruları

1. **`shoppingCart` adlı bir dizi verildiğinde**, içindeki her ürün nesnesinde `quantity` ve `price` özellikleri bulunmaktadır. `reduce` kullanarak tüm ürünlerin toplam fiyatını hesaplayın.
   ```javascript
   const shoppingCart = [
     { product: "apple", price: 1.5, quantity: 4 },
     { product: "banana", price: 0.8, quantity: 6 },
     { product: "milk", price: 2.5, quantity: 2 },
   ];
   ```

2. **`expenses` adlı bir dizi verildiğinde**, her nesnede `category` ve `amount` bulunmaktadır. `reduce` kullanarak tüm `food` kategorisindeki harcamaların toplamını bulun.
   ```javascript
   const expenses = [
     { category: "food", amount: 20 },
     { category: "entertainment", amount: 10 },
     { category: "food", amount: 15 },
   ];
   ```

3. **`wordArray` adlı bir dizi verildiğinde**, `reduce` kullanarak tüm kelimeleri tek bir cümlede birleştirin.
   ```javascript
   const wordArray = ["This", "is", "a", "test"];
   ```

4. **`grades` adlı bir dizi verildiğinde**, `reduce` kullanarak en yüksek puanı bulun.
   ```javascript
   const grades = [85, 90, 78, 88, 92];
   ```

5. **`salesData` adlı bir dizi verildiğinde**, her nesnede `sales` ve `region` özellikleri bulunmaktadır. `reduce` kullanarak `North` bölgesindeki satışların toplamını bulun.
   ```javascript
   const salesData = [
     { region: "North", sales: 150 },
     { region: "South", sales: 200 },
     { region: "North", sales: 100 },
   ];
   ```

6. **`charArray` adlı bir dizi verildiğinde**, `reduce` kullanarak karakterlerin sayısını (uzunluklarını) toplayın.
   ```javascript
   const charArray = ["apple", "banana", "orange"];
   ```

7. **`ages` adlı bir dizi verildiğinde**, `reduce` kullanarak yaş ortalamasını bulun.
   ```javascript
   const ages = [20, 25, 30, 35, 40];
   ```

8. **`transactions` adlı bir dizi verildiğinde**, `reduce` kullanarak pozitif olanların sayısını bulun.
   ```javascript
   const transactions = [-100, 50, -20, 30, -5, 10];
   ```

9. **`library` adlı bir dizi verildiğinde**, her kitapta `title` ve `pages` bulunmaktadır. `reduce` kullanarak tüm kitapların toplam sayfa sayısını bulun.
   ```javascript
   const library = [
     { title: "Book1", pages: 200 },
     { title: "Book2", pages: 150 },
     { title: "Book3", pages: 300 },
   ];
   ```

10. **`donations` adlı bir dizi verildiğinde**, her bağışta `amount` ve `donor` özellikleri bulunmaktadır. `reduce` kullanarak en büyük bağış miktarını bulun.
    ```javascript
    const donations = [
      { donor: "Alice", amount: 50 },
      { donor: "Bob", amount: 75 },
      { donor: "Charlie", amount: 30 },
    ];
    ```

