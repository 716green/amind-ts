//* START BOILERPLATE
var app = document.getElementById("app");
var body = "<h1>\uD83D\uDCBB TypeScript</h1>";
var addToBody = function (value) { body += "<br>" + value; };
var addSpace = function () { addToBody('<br><br>'); };
var addLine = function () { addToBody('<hr>'); };
//! END BOILERPLATE
// let userInput: unknown;
var userInput;
var userName;
userInput = 5;
userInput = 'Bob';
userName = userInput; // ERROR if unknown, works if 'any'
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never returns anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// custom error message
try {
    generateError('terrible error', 500);
}
catch (_a) {
    console.log('remove try/catch block to see error');
}
//* RENDER BODY
app.innerHTML = body;
