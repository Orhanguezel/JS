class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        return "Hata: Sıfıra bölme yapılamaz!";
      }
      return a / b;
    }
  }
  
  // Statik metot çağrıları
  console.log(Calculator.add(10, 5));       // 15
  console.log(Calculator.subtract(10, 5));  // 5
  console.log(Calculator.multiply(10, 5));  // 50
  console.log(Calculator.divide(10, 0));    // Hata: Sıfıra bölme yapılamaz!
  