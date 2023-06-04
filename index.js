// // // const length = prompt("Enter length");
// // // const width = prompt("Enter width");
// // // const area = length * width;
// // // console.log(area);

// // // alert("The area of recgtangle is :" + area);

// // // document.write("The area of ractangle is: " + area);

// // //variables
// // var x = 89;
// // console.log(x);

// // x = 200;
// // console.log(x);

// // var x = 5 + 4;
// // console.log(x);

// let y = 60;
// console.log(y);
// y = 45;
// console.log(y);
// let y = 5 + 6;
// console.log(y);

// const c = 5;
// console.log("c");
// c = 7;
// console.log(c);

// const c = 5 + 8;
// console.log(c);

// const name = " saroj";
// const y = 79;
// const ans = name + y;
// console.log(ans);

// let y = true;
// console.log(typeof y);

// let x = 66;
// let y = 67;
// let z = true;

// let ans = x + y + z;
// console.log(ans);

// let y = null;
// console.log(typeof y);

// let z;
// console.log(typeof z);

// const name = " saroj";
// const lname = "shah";
// console.log("k cha : $ ${name}");

// const name = "saroj";
// const lname = "Shah";
// const age = 45;
// console.log(`k cha : ${name} ${lname} ${age}`);

// const name = "saroz";
// const lname = "shah";
// const address = " imadol";
// console.log(`hello: ${name} ${address}`);

// let x = "sar";
// let y = " sah";
// const address = " imadol";
// console.log(`hi: ${y} ${x}`);

//strings method
//type conversion
// const x = 90;
// console.log(x);
// console.log(typeof x);
// console.log(typeof String(x));

// const x = "hello world";
// console.log(x);
// console.log(typeof x);
// console.log(typeof Number(x));

//string method

let result = "hello world!";
// console.log(result[0]);

//

//concat
// console.log(result.concat("saroj shah"));

//replace
// console.log(result.replace("hello", "sir"));

//split
// console.log(result.split(" "));

//charAt
// console.log(result.charAt(6));

// //indexof
// console.log(result.indexOf("h"));

// //includes
// console.log(result.includes("world"));

// //trim
// console.log(result.trim());

//substring
// console.log(result.substring(0, 4));
// console.log(result.slice(0, 4));
// console.log(result.toLowerCase());
// console.log(result.toUpperCase());

//if else
// let email = "shah.saroz748@gmail.com";
// let password = "99999";
// if (email === "shah.saroz748@gmail.com" && password === "99999") {
//   console.log("welcome sir !!");
// } else {
//   console.log("invalid response!");

// let day = "sunny";
// if( day === "sunny"){
//     console.log("i need my umbrella!!");
// }else if (day === "hot"{
//     console.log("i will go  swimming");
// }else if(day === "rainy"){
//     console.log( "i will not go out ");
// }else{
//     console.log(" you are not eligible to out");
// }

// let x = 10 ;
// if(x> 15) {
//     console.log("x is greater ");

// }else if (x>5)
// {
//     console.log( x is greater than 5);
// }
// else{
//     console.log ("x is not greater");

// }

// let grade = "D";
// if( grade === "A")
// {
//     console.log("excellent");
// }else if ( grade === " B"){
//     console.log("very good");

// }else if ( "grade === "C")
// {
//   console.log( "good");
// }
// else {
//     console.log ("you are failed");
// }

// const arr = new Array(1, 2, 3, 4);
// console.log(arr);

// const arr = [];
// arr[0] = 7;
// for (let i = 0; i < 10; i++) {
//   arr.push(1);
// }
// console.log(arr);

// Objects

// const car = {
//   model: "swift",
//   model: "saw",
//   color: "red",
//   wheel: "4",
//   electrical: false,

//   startEngine: function () {
//     console.log("Start engine");
//     return true;
//   },
//   closeEngine: function () {
//     console.log("Close engine");
//     return false;
//   },
// };

// console.log(car);

// function myFunc() {
//   let x = 89;
//   let y = 56;
//   let ans = x + y;
//   console.log(ans);
// }

//function
// function myFunc(a, b, c) {
//   console.log(c);
//   return a + b;
// }
// const result = myFunc(5, 8);
// console.log("result");

// function SumArr(arr = []) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // total = total+arr[i]
//     console.log(arr[i]);
//   }
//   return total;
// }
// const ans = SumArr([4, 5, 6, 7, 8, 9]);
// console.log(ans);

// function SumArr(arr = []) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // total = total+arr[i]
//     total += arr[i];
//   }
//   return total;
// }
// const ans = SumArr([4, 5, 6, 7, 8, 9]);
// console.log(ans);

// scoping
// let x = 90;
// {
//   x = 6;
//   let y = 9 + 9;
//   console.log(x);
// }
// console.log(x);

// var x = 90;

// function myVar() {
//   if (true) {
//     var x = 9 + 9;
//     console.log(x);
//   }
//   console.log(x);
// }

// console.log(x);
// myVar();

// let x = 90;
// {
//   x = 6;
//   let y = 9 + 9;
// }
// console.log(y);

// console.log(window);

// console.log(window.document);

// DOM
// const header = document.getElementById("my header");
// console.log(header);
// header.innerHTML = " haina";
// header.style.backgrooundColor = "red";
// header.style.color = "black";

// DOM manupulation
// const text = document.getElementById("hello");
// const text1 = document.getElementByIdclassName("myclass");
// console.log(text1);
// text.innerHTML = "<h1> processing<h1/>";
// text.style.backgroundColor = "red";
// console.log(text);

const mayor = document.getElementsByTagName("span");
console.log(mayor);
mayor[0].innerHTML = "saroj";
mayor[1].innerHTML = "shah";

const Btn = document.querySelectorAll("button");
console.log(Btn);
Btn[1].style.color = "white";
Btn[1].style.backgroundColor = "blue";
Btn[1].style.border = "none";
Btn[1].style.cursor = "pointer";
Btn[1].style.padding = "10px";
Btn[1].style.margin = "5px";

const clickBtn = document.querySelector("#click");

// console.log(clickBtn.getAttribute("id"));
// clickBtn.setAttribute("class", "meroclass");

function showwhenClick() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Nepal is beautiful country";
  document.body.prepend(h1);
}

function deleteones() {
  const h1 = document.querySelector("h1");
  h1.remove();
}
clickBtn.onclick = showwhenClick;
Btn[1].onclick = deleteones;

clickBtn.style.color = "white";
clickBtn.style.backgroundColor = "green";
clickBtn.style.border = "none";
clickBtn.style.cursor = "pointer";
clickBtn.style.padding = "10px";
clickBtn.style.margin = "5px";
