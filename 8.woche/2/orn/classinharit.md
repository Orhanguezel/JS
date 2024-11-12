İşte benzer yapıda beş görev:

### Görevler

---

### Task 1 - `Product` Class

- Create a `Product` class which accepts 4 arguments and sets the following properties:

  - `productId`: a number representing a unique identifier for a product
  - `name`: a string for the name of the product
  - `price`: a number representing the price of the product
  - `quantity`: a number representing the quantity in stock

- The `Product` class should have a method called `getProductInfo` which returns a string in the format:

```
Product ID: productId
Name: name
Price: price
Quantity: quantity
```

---

### Task 2 - `Order` Class

- Create an `Order` class which accepts 3 arguments and sets the following properties:

  - `orderId`: a number representing a unique identifier for an order
  - `products`: an array to store products added to the order
  - `total`: a number representing the total price of the order (initially 0)

- The `Order` class should have methods:
  - `addProduct` to add a product to the `products` array and update `total`
  - `removeProduct` to remove a product from the `products` array and update `total`

---

### Task 3 - `LibraryUser` Class

- Create a `LibraryUser` class which accepts 4 arguments and sets the following properties:

  - `userId`: a number representing a unique identifier for the user
  - `name`: a string representing the user's name
  - `membershipType`: a string for the type of membership (e.g., "standard", "premium")
  - `borrowedBooks`: an array to store borrowed book objects

- The `LibraryUser` class should have methods:
  - `borrowBook` to add a book to the `borrowedBooks` array
  - `returnBook` to remove a book from the `borrowedBooks` array

---

### Task 4 - `Vehicle` Class

- Create a `Vehicle` class which accepts 3 arguments and sets the following properties:

  - `make`: a string representing the manufacturer of the vehicle
  - `model`: a string representing the model of the vehicle
  - `year`: a number representing the manufacture year

- The `Vehicle` class should have a method called `getVehicleInfo` which returns a string in the format:

```
Make: make
Model: model
Year: year
```

---

### Task 5 - `Course` Class

- Create a `Course` class which accepts 3 arguments and sets the following properties:

  - `courseCode`: a string representing the unique code for the course
  - `courseName`: a string representing the name of the course
  - `students`: an array to store student names enrolled in the course

- The `Course` class should have methods:
  - `addStudent` to add a student’s name to the `students` array
  - `removeStudent` to remove a student’s name from the `students` array

---

Bu görevleri çözerek nesne yönelimli programlama pratiklerini geliştirebilirsiniz. Kolay gelsin!