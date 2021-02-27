//* START BOILERPLATE
const app = document.getElementById("app");
let body = `<h1>💻 TypeScript</h1>`
const addToBody = (value: string) => {
    body += "<br>" + value;
};
const addSpace = () => {
    addToBody('<br><br>');
};
const addLine = () => {
    addToBody('<hr>');
};
//? END BOILERPLATE


function add(n1: number, n2: number): number {
  return n1 + n2
}

function combine(n1: string, n2: string): void {
  console.log(n1 + n2)
}

//* Function types - let combineValues: Function
let combineValues: (a: number, b: number) => number;
addToBody(add(2, 3).toString())
combineValues = add
console.log(combineValues(8,8))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

// anonymous function passed in as a callback function
addAndHandle(2, 4, (result) => {
  console.log(result)
})

//* Callback Example
const addValues = (n1: number, n2: number, cb: (value: any) => any) => {
  const res = n1 + n2

  const result = cb(res)

  return result
}

const callbackResult = addValues(1, 2, (value) => {return value})

addToBody(callbackResult)

//* RENDER BODY
app.innerHTML = body;
