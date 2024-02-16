// data for Js Functions
alert("Hello World!");

var Me = "Kelly";
const US = 50;

var add = 5 + 4;
console.log(add);
// first set of names and ages
var people = ["Charles", "Abby", "James", "John"];

var a = {
  Name: "Charles",
  Age: 21,
};

var b = {
  Name: "Abby",
  Age: 27,
};

var c = {
  Name: "James",
  Age: 18,
};

var d = {
  Name: "John",
  Age: 17,
};

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you arent old enough to veiw this page!");
  } else {
    console.log("Is old enough");
  }
}

checkAge(a.Name, a.Age);
checkAge(b.Name, b.Age);
checkAge(c.Name, c.Age);
checkAge(d.Name, d.Age);
// names of favorite vegetables
var vegetables = [
  "Carrots",
  "Sweet Patatoes",
  "Potatoes",
  "Broccoli",
  "Green Beans",
];

vegetables.map((veg) => console.log(veg));
// map made this alot easier
var Pet = {
  name: "Lucy",
  breed: "White German Shepherd",
};

console.log(Pet);
// seconds set of names and ages
var E = {
  Name: "Coal",
  Age: 23,
};

var F = {
  Name: "Rock",
  Age: 18,
};

var G = {
  Name: "Wood",
  Age: 29,
};

var H = {
  Name: "Brass",
  Age: 22,
};

var I = {
  Name: "Water",
  Age: 16,
};
// loop for objects in array
var Objects = [E, F, G, H, I];

Objects.map((obj) => checkAge(obj.Name, obj.Age));
// passing the argument
function getLength(word) {
  if (word) {
    return word.length;
  }
}
var checkHelloWorld = getLength("Hello World");
if (checkHelloWorld % 2 === 0) {
  console.log("The World Is Even");
} else {
  console.log("The World is a Odd Place");
}
