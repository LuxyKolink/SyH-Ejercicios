// if ("" == 0) {
//     // It is! But why??
// }
// if (1 < x < 3) {
//     // True for *any* value of x!
// }

// console.log("" == 0);

// var x = 5
// console.log(1 < x < 3);

// const obj = { width: 10, height: 15 };
// // Why is this NaN? Spelling is hard!
// const area = obj.width * obj.heigth;
// console.log(area);

// console.log(4 / []);

// const message = "Hello World!";

// // Accessing the property 'toLowerCase'
// // on 'message' and then calling it
// message.toLowerCase();
// // Calling 'message'
// message();

// function fn(x) {
//     return x.flip();
//   }

// fn();

// const message = "hello!";

// message();

const user = {
    name: "Daniel",
    age: 26,
};
user.location; // returns undefined

// const announcement = "Hello World!";
 
// // How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
 
// // We probably meant to write this...
// announcement.toLocaleLowerCase();

// function flipCoin() {
//     // Meant to be Math.random()
//     return Math.random < 0.5;
// }

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Oops, unreachable
}