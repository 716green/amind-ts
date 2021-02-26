"use strict";
exports.__esModule = true;
var dataTypes_1 = require("./dataTypes");
//* REFERENCE INDEX.HTML
var app = document.getElementById("app");
//* INIT HTML BODY
var body = "<h1>\uD83D\uDCBB TypeScript</h1>";
// todo - 'exports' doesn't seem to work, no tsconfig
dataTypes_1.addSpace();
dataTypes_1.addToBody('Hello World');
dataTypes_1.addLine();
//* RENDER BODY
app.innerHTML = body;
