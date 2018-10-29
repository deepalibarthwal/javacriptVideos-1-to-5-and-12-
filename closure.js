// var globalMessage = "Hello from global.";
// function message() {
//     var hello = "Hello world";
//     console.log(hello, globalMessage);
// }

// message();
// console.log(hello, globalMessage);
// ----------------------------------

// var globalHeader = "Global header";

// function message(m1) {
//     var messageTitle  = "MESSAGE: ";
//     return function show(p1) {
//         console.log(globalHeader, messageTitle, m1, p1);
//     }
// }

// var show = message("My message");
// show("additional parameter");

// document.addEventListener("click", function(e) {
//     show( +new Date());
// });
// -------------------------------------

// var setting = function (newUrl) {
//     var url = newUrl;
//     var visitorCount = 0;
//     var getUrl = function() {
//         return url;
//     }
//     var toString = function() {
//         return `${url} -> visitor count -> ${visitorCount}`;
//     }
//     var increment = function() {
//         visitorCount++;
//         return visitorCount;
//     }
//     return {
//         toString : toString,
//         getUrl : getUrl,
//         incrementVisitor: increment
//     }
// }

// var algorisys = setting("http://algorisys.com");
// console.log(algorisys.toString(), algorisys.getUrl());

// document.addEventListener("click", function(e) {
//     algorisys.incrementVisitor();
//     console.log(algorisys.toString(), algorisys.getUrl());
// });
// -------------------------

// var add = (a) => {
//     return function (b) {
//         return a + b;
//     }
// }

// let add10 = add(10);
// console.log(add10(5));
// console.log(add10(10));

// let add5 = add(5);
// console.log(add5(10));
// -------------------------------


// var funcs = [];

// for(var i=0; i<3; i++) {
//     funcs[i] =  (function (val) {
//         return function () {
//             console.log("i value is " + val);
//         }
//     })(i);
// }

// for(let i=0; i<3; i++) {
//     funcs[i] = function () {
//         console.log("i value is " + i);
//     }
// }

// for(var j=0; j<3; j++) {
//     funcs[j]();
// }

// funcs[0]();
// funcs[1]();

//console.log("I=", i)

