// // // // const length = prompt("Enter length");
// // // // const width = prompt("Enter width");
// // // // const area = length * width;
// // // // console.log(area);

// // // // alert("The area of recgtangle is :" + area);

// // // // document.write("The area of ractangle is: " + area);

// // // //variables
// // // var x = 89;
// // // console.log(x);

// // // x = 200;
// // // console.log(x);

// // // var x = 5 + 4;
// // // console.log(x);

// // let y = 60;
// // console.log(y);
// // y = 45;
// // console.log(y);
// // let y = 5 + 6;
// // console.log(y);

// // const c = 5;
// // console.log("c");
// // c = 7;
// // console.log(c);

// // const c = 5 + 8;
// // console.log(c);

// // const name = " saroj";
// // const y = 79;
// // const ans = name + y;
// // console.log(ans);

// // let y = true;
// // console.log(typeof y);

// // let x = 66;
// // let y = 67;
// // let z = true;

// // let ans = x + y + z;
// // console.log(ans);

// // let y = null;
// // console.log(typeof y);

// // let z;
// // console.log(typeof z);

// // const name = " saroj";
// // const lname = "shah";
// // console.log("k cha : $ ${name}");

// // const name = "saroj";
// // const lname = "Shah";
// // const age = 45;
// // console.log(`k cha : ${name} ${lname} ${age}`);

// // const name = "saroz";
// // const lname = "shah";
// // const address = " imadol";
// // console.log(`hello: ${name} ${address}`);

// // let x = "sar";
// // let y = " sah";
// // const address = " imadol";
// // console.log(`hi: ${y} ${x}`);

// //strings method
// //type conversion
// // const x = 90;
// // console.log(x);
// // console.log(typeof x);
// // console.log(typeof String(x));

// // const x = "hello world";
// // console.log(x);
// // console.log(typeof x);
// // console.log(typeof Number(x));

// //string method

// let result = "hello world!";
// // console.log(result[0]);

// //

// //concat
// // console.log(result.concat("saroj shah"));

// //replace
// // console.log(result.replace("hello", "sir"));

// //split
// // console.log(result.split(" "));

// //charAt
// // console.log(result.charAt(6));

// // //indexof
// // console.log(result.indexOf("h"));

// // //includes
// // console.log(result.includes("world"));

// // //trim
// // console.log(result.trim());

// //substring
// // console.log(result.substring(0, 4));
// // console.log(result.slice(0, 4));
// // console.log(result.toLowerCase());
// // console.log(result.toUpperCase());

// //if else
// // let email = "shah.saroz748@gmail.com";
// // let password = "99999";
// // if (email === "shah.saroz748@gmail.com" && password === "99999") {
// //   console.log("welcome sir !!");
// // } else {
// //   console.log("invalid response!");

// // let day = "sunny";
// // if( day === "sunny"){
// //     console.log("i need my umbrella!!");
// // }else if (day === "hot"{
// //     console.log("i will go  swimming");
// // }else if(day === "rainy"){
// //     console.log( "i will not go out ");
// // }else{
// //     console.log(" you are not eligible to out");
// // }

// // let x = 10 ;
// // if(x> 15) {
// //     console.log("x is greater ");

// // }else if (x>5)
// // {
// //     console.log( x is greater than 5);
// // }
// // else{
// //     console.log ("x is not greater");

// // }

// // let grade = "D";
// // if( grade === "A")
// // {
// //     console.log("excellent");
// // }else if ( grade === " B"){
// //     console.log("very good");

// // }else if ( "grade === "C")
// // {
// //   console.log( "good");
// // }
// // else {
// //     console.log ("you are failed");
// // }

// // const arr = new Array(1, 2, 3, 4);
// // console.log(arr);

// // const arr = [];
// // arr[0] = 7;
// // for (let i = 0; i < 10; i++) {
// //   arr.push(1);
// // }
// // console.log(arr);

// // Objects

// // const car = {
// //   model: "swift",
// //   model: "saw",
// //   color: "red",
// //   wheel: "4",
// //   electrical: false,

// //   startEngine: function () {
// //     console.log("Start engine");
// //     return true;
// //   },
// //   closeEngine: function () {
// //     console.log("Close engine");
// //     return false;
// //   },
// // };

// // console.log(car);

// // function myFunc() {
// //   let x = 89;
// //   let y = 56;
// //   let ans = x + y;
// //   console.log(ans);
// // }

// //function
// // function myFunc(a, b, c) {
// //   console.log(c);
// //   return a + b;
// // }
// // const result = myFunc(5, 8);
// // console.log("result");

// // function SumArr(arr = []) {
// //   let total = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     // total = total+arr[i]
// //     console.log(arr[i]);
// //   }
// //   return total;
// // }
// // const ans = SumArr([4, 5, 6, 7, 8, 9]);
// // console.log(ans);

// // function SumArr(arr = []) {
// //   let total = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     // total = total+arr[i]
// //     total += arr[i];
// //   }
// //   return total;
// // }
// // const ans = SumArr([4, 5, 6, 7, 8, 9]);
// // console.log(ans);

// // scoping
// // let x = 90;
// // {
// //   x = 6;
// //   let y = 9 + 9;
// //   console.log(x);
// // }
// // console.log(x);

// // var x = 90;

// // function myVar() {
// //   if (true) {
// //     var x = 9 + 9;
// //     console.log(x);
// //   }
// //   console.log(x);
// // }

// // console.log(x);
// // myVar();

// // let x = 90;
// // {
// //   x = 6;
// //   let y = 9 + 9;
// // }
// // console.log(y);

// // console.log(window);

// // console.log(window.document);

// // DOM
// // const header = document.getElementById("my header");
// // console.log(header);
// // header.innerHTML = " haina";
// // header.style.backgrooundColor = "red";
// // header.style.color = "black";

// // DOM manupulation
// // const text = document.getElementById("hello");
// // const text1 = document.getElementByIdclassName("myclass");
// // console.log(text1);
// // text.innerHTML = "<h1> processing<h1/>";
// // text.style.backgroundColor = "red";
// // console.log(text);

// const mayor = document.getElementsByTagName("span");
// console.log(mayor);
// mayor[0].innerHTML = "saroj";
// mayor[1].innerHTML = "shah";

// const Btn = document.querySelectorAll("button");
// console.log(Btn);
// Btn[1].style.color = "white";
// Btn[1].style.backgroundColor = "blue";
// Btn[1].style.border = "none";
// Btn[1].style.cursor = "pointer";
// Btn[1].style.padding = "10px";
// Btn[1].style.margin = "5px";

// const clickBtn = document.querySelector("#click");

// // console.log(clickBtn.getAttribute("id"));
// // clickBtn.setAttribute("class", "meroclass");

// function showwhenClick() {
//   const h1 = document.createElement("h1");
//   h1.innerHTML = "Nepal is beautiful country";
//   document.body.prepend(h1);
// }

// function deleteones() {
//   const h1 = document.querySelector("h1");
//   h1.remove();
// }
// clickBtn.onclick = showwhenClick;
// Btn[1].onclick = deleteones;

// clickBtn.style.color = "white";
// clickBtn.style.backgroundColor = "green";
// clickBtn.style.border = "none";
// clickBtn.style.cursor = "pointer";
// clickBtn.style.padding = "10px";
// clickBtn.style.margin = "5px";

// // Advance array method
// const arr = [2, 5, 6, 6, 9, 1, 2, 3];

// arr.find((value, index) => {
//   if (value === 6) {
//     console.log("6 exist");
//   }
// });

// find
// arr.find((value, index) => console.log(value, index));

// const newarr = arr.find((value, index) => value > 5);
// console.log(newarr);

// filter
// const newarr = arr.filter((value, index) => value > 5);
// console.log(newarr);

// sort
// const newarr = arr.sort((a, b) => a - b);
// console.log(newarr);

//
// const Subarr = [
//   [1, 2, 3],
//   [8, 9, 6],
//   [9, 5, 6],
// ];
// const newarr = Subarr.flat();
// console.log(newarr);

// some
// const result = arr.some((value, index) => value > 6);
// console.log(result);

// every
// const result = arr.every((value, index) => value > 6);
// console.log(result);

// foreach
// const result = arr.forEach((value, index) => (value += 6));
// console.log(result);
// console.log(arr);

// map
// const result = arr.map((value, index) => (value += 6));
// console.log(result);
// console.log(arr);

// const Input = document.querySelector("input");
// const AddBtn = document.querySelector("#add");
// const Btnlogout = document.querySelector("#clear");

// const AddWebStorage = () => {
//   localStorage.setItem(
//     "key",
//     JSON.stringify({
//       name: "ram",
//       age: 34,
//       gender: "male",
//       Ismarried: false,
//     })
//   );
// };
// AddBtn.addEventListener("click", AddWebStorage);
// Btnlogout.addEventListener("click", () => {
//   localStorage.clear();
// });
// alert(localStorage.getItem("key"));
// if (localStorage.getItem("key")) {
//   console.log(JSON.parse(localStorage.getItem("key")));
// }

// Statics property and method

// class Auth {
//   static dbEmail = "eamil@gmail.com";
//   static dbPassword = "Password";
//   static dbToken = "njsanjns";
// }
// console.log(Auth.dbEmail);

// class Person {
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//   }
//   static compareByFilter(value, index) {
//     return value.income > 1000;
//   }
// }

// const user1 = new Person("Ram", 33, 45000);
// const user2 = new Person("Laxman", 67, 7889);
// const user3 = new Person("sam", 78, 8790);

// const users = [user1, user2, user3];
// const result = users.filter(Person.compareByFilter);
// console.log(result);

// setTimeout(() => {
//   alert("Hello World");
// }, 3000);
// console.log("first");
// console.log("second");
// console.log("third");

// function add(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function displaySum(ans) {
//   console.log(`the sum of two nember:${ans}`);
// }

// add(4, 3, displaySum);

// const ans = add(4, 3);
// console.log(ans);

// let myArr = [7, 8, 5, 6, 9, 0];
// function calculation(arr = [], cb) {
//   let ans = [];

//   for (let i = 0; i < arr.length; i++) {
//     ans.push(cb(arr[i]));
//   }
//   console.log(ans);
// }

// // function multiply(a) {
// //   return a * 10;
// // }
// // function divide(a) {
// //   return a / 10;
// // }
// // wrap above into one line code
// calculation(myArr, (a) => a * 10);
// calculation(myArr, (a) => a / 10);
// calculation(myArr, (a) => a + 5);
// calculation(myArr, (a) => a - 5);

// let personList = [];
// const fetchedData = (callBack) => {
//   setTimeout(
//     (callBack) => {
//       personList.push(
//         { id: 1, name: "Ram", age: 32 },
//         { id: 2, name: "hari", age: 45 },
//         { id: 3, name: "gita", age: 43 },
//         { id: 4, name: "sita", age: 12 }
//       );

//       callBack();
//       console.log(personList);
//     },
//     4000,
//     callBack
//   );
// };
// // console.log(personList);
// // fetchedData(dispalyName);
// // console.log(personList);
// const dispalyName = () => {
//   setTimeout(() => {
//     for (let i = 0; i < personList.length; i++) {
//       const p = document.createElement("p");
//       p.innerHTML = personList[i].name;
//       document.body.append(p);
//     }
//   }, 1000);
// };

// fetchedData(dispalyName);

const tempratureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const form = document.querySelector("form");
const input = document.querySelector(".searchField");
let target = "Kathmandu";
const fetchedData = async (target) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0c28e52f21ce44628ca92338231406&q=${target}`
    );
    const data = await res.json();
    console.log(data);

    const {
      current: {
        temp_c,
        condition: { icon, text },
      },
      location: { name, localtime },
    } = data;

    tempratureField.innerHTML = `${temp_c}&deg;C`;
    cityField.innerHTML = name;
    emojiField.src = icon;
    weatherField.innerHTML = text;

    const exactTime = localtime.split(" ")[1];
    const exactDate = localtime.split(" ")[0];

    const currentDate = new Date();
    const currentDay = getTodayDate(currentDate.getDay());

    dateField.innerHTML = `${exactTime} -${currentDay} ${exactDate} `;
  } catch (error) {
    alert("location not found!");
  }
};
fetchedData(target);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("Field must be filled");
  } else {
    target = input.value;
    fetchedData(target);
  }
});
function getTodayDate(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return " Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursady";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid";
  }
}
