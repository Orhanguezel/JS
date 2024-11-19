"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["AUTHOR"] = "author";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person1 = {
    name: "John",
    age: 40,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN, // Enum kullanımı doğru
};
function combine(n1, n2, resultConversion) {
    if (resultConversion === "as-number") {
        return +n1 + +n2;
    }
    else {
        return (+n1 + +n2).toString();
    }
}
const combinedNumbers = combine("20", "30", "as-text");
console.log(combinedNumbers);
