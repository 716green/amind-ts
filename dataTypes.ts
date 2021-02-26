enum Role { ADMIN, READ_ONLY, AUTHOR }; // 0, 1, 2 by default
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 6, 7
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };
  
//* PERSON OBJECT
const person: {
  name: string,
  nickname: string,
  age: number,
  hobbies: string[],
  pets: string[],
  role: Role, // Enum
  ageTitle: [number, string], // Tuple
} = {
  name: "Robert",
  nickname: "Bob",
  age: 30,
  hobbies: ["Programming", "Rats"],
  pets: ["Abi", "Hila"],
  role: Role.ADMIN,
  ageTitle: [30, 'Owner']
};

let pets = person.pets;
let body: string
//* ADD STUFF TO BODY
export const addToBody = (value: string) => {
  body += `<br>${value}`;
};

export const addSpace = () => {
  addToBody('<br><br>')
}

export const addLine = () => {
  addToBody('<hr>')
}

for (const pet of pets) {
  console.log(pet);
  addToBody("🐀 " + pet);
}

addSpace();

if (person.role === Role.ADMIN) {
  addToBody(`${person.nickname} is admin`)
} else if (person.role === Role.AUTHOR) {
  addToBody(`${person.nickname} is author`)
} else {
  addToBody(`${person.nickname} is readonly user`)
}

//* Custom Types (Alias)
//? Custom types are good for union types as aliases
type Combinable = number | string
type ConversionDescriptor = 'num' | 'txt'


//* UNION TYPES
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result: Combinable
  //* RUNTIME TYPE CHECK
  if (typeof input1 === 'number' && input2 === 'number' || resultConversion === 'num') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}
addLine()
let combinedAges: any
combinedAges = combine(30, 26, 'num')
addToBody(combinedAges)
combinedAges = combine('30', '26', 'txt')
addToBody(combinedAges)
combinedAges = combine('Max ', 'Anna', 'txt')
addToBody(combinedAges)
addLine()