const text = "Let`s try string methods";
console.log(text.toLowerCase());// alles klein
console.log(text.toUpperCase());// alles groß

const upperCase = text.toUpperCase();
console.log(upperCase);// alles groß

const einStueck = text.slice(0, 5);
console.log("einstuck: ",einStueck);// Let`s

const lastStueck = text.slice(-7);
console.log("laststuck:",lastStueck);// methods

const lastStueck2 = text.slice(-7,-1);
console.log("laststuck2:",lastStueck2);// method

const lastLetterCapital= text.slice(0, text.length-1).toLowerCase() + text[text.length-1].toUpperCase();
console.log("lastLetterCapital:",lastLetterCapital);// let`s try string methodS




