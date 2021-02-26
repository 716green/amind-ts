import { addSpace, addToBody, addLine } from "./dataTypes";
//* REFERENCE INDEX.HTML
const app = document.getElementById("app");
//* INIT HTML BODY
let body = `<h1>💻 TypeScript</h1>`
// todo - 'exports' doesn't seem to work, no tsconfig


addSpace();
addToBody('Hello World')
addLine()









//* RENDER BODY
app.innerHTML = body;
