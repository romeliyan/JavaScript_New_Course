//strings
console.log("helo how are you ?"); // you can use single quotes or double quotes

let email = "romesh@gmail.com";

console.log(email);

//string cocatenation
let firstName = "Romesh";
let lastName = "Liyanage";

let fullName = firstName + " " + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0]); //this will print R

//getting String length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase()); //since its a method we use () after

let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf("@"); //find the @ sign this is an argument
