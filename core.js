// core module sont les module installé avec node
// example fs
// fs a des methodes sync et async

// import core module=> installé avec node
const fs = require("fs");
// console.log(fs);

// ----------------------------------------------

// les methode async contient des call back functions=>
// step1
console.log("starting...");
// STEP3
fs.readFile("./text.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});
// step2
console.log("finishing...");

// ----------------------------------------------------------------------------
// les methode synchrone sont des methode code bloquante
// step1
console.log("starting...");
// STEP2
let data = fs.readFileSync("text.txt");
console.log(data.toString());
// step3
console.log("finishing...");


//os module
const os = require('os');

const TolMemo=os.totalmem()

const FreeMemo=os.freemem()

console.log('la memoire totale sur votre machine est:',TolMemo)
console.log('la memoire libre sur votre machine est:',FreeMemo)

