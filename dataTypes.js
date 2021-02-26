"use strict";
exports.__esModule = true;
exports.addLine = exports.addSpace = exports.addToBody = void 0;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // 0, 1, 2 by default
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // 5, 6, 7
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 };
//* PERSON OBJECT
var person = {
    name: "Robert",
    nickname: "Bob",
    age: 30,
    hobbies: ["Programming", "Rats"],
    pets: ["Abi", "Hila"],
    role: Role.ADMIN,
    ageTitle: [30, 'Owner']
};
var pets = person.pets;
var body;
//* ADD STUFF TO BODY
exports.addToBody = function (value) {
    body += "<br>" + value;
};
exports.addSpace = function () {
    exports.addToBody('<br><br>');
};
exports.addLine = function () {
    exports.addToBody('<hr>');
};
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var pet = pets_1[_i];
    console.log(pet);
    exports.addToBody("🐀 " + pet);
}
exports.addSpace();
if (person.role === Role.ADMIN) {
    exports.addToBody(person.nickname + " is admin");
}
else if (person.role === Role.AUTHOR) {
    exports.addToBody(person.nickname + " is author");
}
else {
    exports.addToBody(person.nickname + " is readonly user");
}
//* UNION TYPES
function combine(input1, input2, resultConversion) {
    var result;
    //* RUNTIME TYPE CHECK
    if (typeof input1 === 'number' && input2 === 'number' || resultConversion === 'num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
exports.addLine();
var combinedAges;
combinedAges = combine(30, 26, 'num');
exports.addToBody(combinedAges);
combinedAges = combine('30', '26', 'txt');
exports.addToBody(combinedAges);
combinedAges = combine('Max ', 'Anna', 'txt');
exports.addToBody(combinedAges);
exports.addLine();
