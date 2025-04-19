"use strict";
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
// interface User {
//   name: string;
//   email: string;
//   password: string;
// }
// interface Admin extends User {
//   admin: boolean;
// }
// function abcd(obj: Admin) {}
// abcd({ name: "ujjwal", email: "u@u", password: "123", admin: true });
//TYPE alias
// type a = number; //declared here as a number
// let b: a; //used here to annotate other variable
// type value = string | number | null;
// let c: value;
// // c = false; wont accept boolean
// type arg = string | null; | is called union
// function abcd(obj: arg) {} //params of this fn will only accept type arg
//wont work in case of type. It wont merge both the types like interface
// type abcd = string;
// type abcd = string
//type is for to create a type like string, number, null etc
// interface is use to create the face/shape of an object
// type User = {
//   name: string;
//   email: string;
// };
// //Admin is of type User union object
// type Admin = User & {
//   getDetails(user: string): void;
// };
// function abcd(a: Admin): void {
//   a.name;
//   a.email;
//   a.getDetails;
// }
// function getDetails(user: string): void {}
// abcd({ name: "ujjwal", email: "u@u", getDetails });
//CLASSES and OBJECTS :-
//creating a class device with fixed values
// class Device {
//   name = "lg";
//   price = 12000;
//   category = "digital";
// }
// //creating object of class device
// let d1 = new Device();
// let d2 = new Device();
// //creating a class using constructor that accepts dynamic values
// class Device2 {
//   constructor(
//     public name: string,
//     public price: number,
//     public category: string = "electronics"
//   ) {}
// }
// //using constructor we can initialize instance variable with different values
// //creating object of class device2
// let device1 = new Device2("Sony", 1000, "tv");
// let device2 = new Device2("apple", 20000, "accessories");
// let device3 = new Device2("samsung", 1000);
//Public, private, protected - access modifers
//difference b/w public, private and protected
// class BottleMaker {
//   constructor(public name: string) {}
//   changeName(newName: string) {
//     this.name = newName;
//   }
// }
// class MetalBottleMaker extends BottleMaker {
//   constructor(name: string) {
//     super(name);
//   }
//   getvalue() {
//     console.log(this.name);
//   }
// }
// let b1 = new MetalBottleMaker("Milton");
// b1.getvalue();
//if we make "name" private in bottle maker class we can change it through child class but cannot access it in child class. Private variables can only be accessed inside the same class
// class BottleMaker {
//   private name = "milton";
// }
// class MetalBottleMaker extends BottleMaker {
//   public material = "metal";
//   log() {
//     console.log(this.name); //as name is private it is not accessible within child class
//   }
// }
// let b1 = new MetalBottleMaker();
// class BottleMaker {
//   protected name = "milton";
// }
// class MetalBottleMaker extends BottleMaker {
//   public material = "metal";
//   logName() {
//     console.log(this.name); //protected varibales can be accessed in child classes
//   }
// }
// let b1 = new MetalBottleMaker();
// b1.name; // since name property is protected we can only access it inside class and its sub clasess
//READ ONLY properties:-
// class User {
//   constructor(public readonly name: string) {}
//   changeName() {
//     this.name = "hello"; //as name is a readonly property we cannot change it
//   }
// }
// let u1 = new User("Ujjwal");
//OPTIONAL properties:-
// class User {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender?: string // this is an optional property now
//   ) {}
// }
// let u1 = new User("Ujjwal", 26, "male");
// let u2 = new User("Harsh", 25); //giving gender is not necessary
//GETTERS and SETTERS:-
// class User {
//   constructor(public _name: string, public age: number) {}
//   //Getter
//   get name() {
//     return this._name;
//   }
//   //setter
//   set name(name: string) {
//     this._name = name;
//   }
// }
// let u1 = new User("Ujjwal", 26);
// u1.name; //calling getter function
// u1.name = "Ishu"; //calling setter function
//STATIC MEMBERS:-
//if i make a variable static I can access the vairable using class name without creating the instance of a class
// class User {
//   static firstName = "Ujjwal";
//   static getRandomNumber() {
//     return Math.random();
//   }
// }
// User.firstName;
// User.getRandomNumber();
// let u1 = new User(); //static variables wont show in instance.
//ABSTRACT CLASSES:-
