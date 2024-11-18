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
  
  class Geometry {
    static calculateCircleArea(radius) {
      return Math.PI * radius * radius;
    }
  
    static calculateRectangleArea(length, width) {
      return length * width;
    }
  }
  
  console.log(Geometry.calculateCircleArea(5)); // 78.53981633974483
  console.log(Geometry.calculateRectangleArea(10, 20)); // 200

  class Config {
    static API_URL = "https://api.example.com";
    static MAX_CONNECTIONS = 10;
  
    static showConfig() {
      console.log(`API URL: ${this.API_URL}`);
      console.log(`Max Connections: ${this.MAX_CONNECTIONS}`);
    }
  }
  
  Config.showConfig();
  // API URL: https://api.example.com
  // Max Connections: 10
  

  class User {
    static loggedInUser = null;
  
    static login(username) {
      this.loggedInUser = username;
      console.log(`${username} logged in.`);
    }
  
    static logout() {
      console.log(`${this.loggedInUser} logged out.`);
      this.loggedInUser = null;
    }
  
    static getLoggedInUser() {
      return this.loggedInUser;
    }
  }
  
  User.login("Ali"); // Ali logged in.
  console.log(User.getLoggedInUser()); // Ali
  User.logout(); // Ali logged out.
  console.log(User.getLoggedInUser()); // null
  
  