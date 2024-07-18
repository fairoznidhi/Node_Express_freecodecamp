//CommonJS, every file in module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require("./4-names"); //way1
const { john, peter } = require("./4-names"); //way2
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

//way1
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
//way2
sayHi(john);
sayHi(peter);
console.log(data);

//built in modules -> OS, PATH, FS, HTTP
