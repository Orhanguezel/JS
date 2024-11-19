enum Role {
    ADMIN = "admin",
    AUTHOR = "author",
    READ_ONLY = 2,
}

const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role?: Role; // İsteğe bağlı özellik
} = {
    name: "John",
    age: 40,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN, // Enum kullanımı doğru
};



  // person.age = "Test";
  type Combinable = number | string;
  type ConversionValue = "as-number" | "as-text";
  
  function combine(
    n1: Combinable,
    n2: Combinable,
    resultConversion: ConversionValue
  ): Combinable {
    if (resultConversion === "as-number") {
      return +n1 + +n2;
    } else {
      return (+n1 + +n2).toString();
    }
  }
  const combinedNumbers = combine("20", "30", "as-text");
  console.log(combinedNumbers);
  