// typescript have type safety

// npm i typescript -g,   to install typecript compiler globally

//tsc --init, to create a config file

//tsc --watch, will compile the ts code in real time

// an array of numbers, string, obj, obj
// let a = [1, 2, 3, 4, "ujjwal", { name: "ujjwal" }, { name: 12 }];

//TUPLES - they are fixed size and fixed type array
// let arr: [string, number] = ["ujjwal", 12];
// let arr2: [string, number] = [10, 'a']; wrong

//ENUMS

// enum USERROLES {
//   ADMIN = "I am admin",
//   SUPERADMIN = "super_admin",
// }

// console.log(USERROLES.ADMIN);

// let a; //this variable is of type ANY, we can save anything in it
// a = 12; //a can be number
// a = "a"; //a can be string as well

// let b = 12; //variable type is set to number, only accepts number
// b = "a" cannot give string to it, because during declaration it was defined as number

// let c: number; //variable declaration is set to number, will only accepts number

//function with return type void, it is not returning anything
// let abcd = (): void => {
//   console.log("a");
// };

// type inference
// understanding type inference
// type annotations

// type inference is TS inferring the type of a variable
// let a = 12; // TS will infer that this variable is number

// let a: number; // ": number" is annotating the type to variable

//Interfaces and Type Aliases

//interface basically is face of an object. how that obj will look
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; // with ? this field becomes optional. you can give or not.
// }

// //param obj getData is receving is of type User interface
// function getData(obj: User) {
//   console.log(obj);
// }

// getData({ name: "ujjwal", email: "u@u", password: "123" });

interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  admin: boolean;
}

function abcd(obj: Admin) {}

abcd({ name: "ujjwal", email: "u@u", password: "123", admin: true });
