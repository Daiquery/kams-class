const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var person1 = {
    name: "bob",
    age: 10,
    grade: 5,
    friends: ["Jack", "John", "Jesse"]
}

var person2 = {
    name: "jack",
    age: 11,
    grade: 5,
    friends: ["Bob", "John", "Jesse"]
}

var person3 = {
    name: "john",
    age: 12,
    grade: 6,
    friends: ["Bob, Jack, Jesse"]
}

var x = [person1, person2, person3];

console.log(x[0]);

var bankAccount = {};
bankAccount["name"] = "Howard";
bankAccount["balance"] = 1000;


rl.question("Show me the money!", (answer) => {
    console.log(`The money is ${10}`);
})