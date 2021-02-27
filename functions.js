//* START BOILERPLATE
var app = document.getElementById("app");
var body = "<h1>\uD83D\uDCBB TypeScript</h1>";
var addToBody = function (value) {
    body += "<br>" + value;
};
var addSpace = function () {
    addToBody('<br><br>');
};
var addLine = function () {
    addToBody('<hr>');
};
//? END BOILERPLATE
function add(n1, n2) {
    return n1 + n2;
}
function combine(n1, n2) {
    console.log(n1 + n2);
}
//* Function types - let combineValues: Function
var combineValues;
addToBody(add(2, 3).toString());
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// anonymous function passed in as a callback function
addAndHandle(2, 4, function (result) {
    console.log(result);
});
//* Callback Example
var addValues = function (n1, n2, cb) {
    var res = n1 + n2;
    var result = cb(res);
    return result;
};
var callbackResult = addValues(1, 2, function (value) { return value; });
addToBody(callbackResult);
//* RENDER BODY
app.innerHTML = body;
