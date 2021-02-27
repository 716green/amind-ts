//* START BOILERPLATE
const app = document.getElementById("app");
let body = `<h1>💻 TypeScript</h1>`
const addToBody = (value: string) => { body += "<br>" + value };
const addSpace = () => { addToBody('<br><br>')};
const addLine = () => { addToBody('<hr>') };
//! END BOILERPLATE

// let userInput: unknown;
let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Bob';
userName = userInput; // ERROR if unknown, works if 'any'

if (typeof userInput === 'string') {
  userName = userInput
}

// Never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}


// custom error message
try {
  generateError('terrible error', 500)
} catch {
  console.log('remove try/catch block to see error')
}



//* RENDER BODY
app.innerHTML = body;
