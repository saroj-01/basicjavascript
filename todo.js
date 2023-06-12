// const title = document.querySelector("#title");
// const description = document.querySelector("#description");
// const form = document.querySelector("form");
// const container = document.querySelector(".container");

// let tasks = localStorage.getItem("tasks")
//   ? JSON.parse(localStorage.getItem("tasks"))
//   : [];

// showAllTasks();
// function showAllTasks() {
//   tasks.forEach((value, index) => {
//     const div = document.createElement("div");
//     div.setAttribute("class", "task");

//     const innerDiv = document.createElement("div");
//     div.append(innerDiv);

//     const p = document.createElement("p");
//     p.innerHTML = value.title;
//     innerDiv.append(p);

//     const span = document.createElement("span");
//     span.innerHTML = value.description;
//     innerDiv.append(span);

//     const Btn = document.createElement("button");
//     Btn.setAttribute("class", "btnDelete");
//     Btn.innerText = "-";

//     Btn.addEventListener("click", () => {
//       removeTasks();
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks", JSON.stringify(tasks));

//       showAllTasks();
//     });

//     div.append(Btn);
//     container.append(div);
//   });
// }

// function removeTasks() {
//   tasks.forEach(() => {
//     const div = document.querySelector(".task");
//     div.remove();
//   });
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   removeTasks();
//   tasks.push({
//     title: title.value,
//     description: description.value,
//   });

//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   showAllTasks();

//   (title.value = ""), (description.value = "");

//   console.log(tasks);
// });

// // set time out and set interval
// // const myfunc = () => {
// //   console.log("hello world");
// // };
// // setTimeout(myfunc, 5000);
// // const Btnremove = document.querySelector("#remove");
// // const clearId = setTimeout(() => {
// //   console.log("hello world");
// // }, 5000);

// // Btnremove.addEventListener("click", () => {
// //   clearTimeout(clearId);
// // });~

// // const clearId = ~setInterval(() => {
// //   const now = new Date();
// //   console.log(now.toLocaleTimeString());
// //   document.write(now.toLocaleTimeString());
// // }, 1000);

// // setTimeout(() => {
// //   clearInterval(clearId);
// // }, 5000);

// class BankAccount {
//   CustomerName;
//   accountNumber;
//   #balance = 0;
//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//   }
//   setbalance(newbalance) {
//     if (isNaN(newbalance)) {
//       throw new Error("Number must be valid!");
//     }
//     this.#balance = newbalance;
//   }
//   getbalance() {
//     return this.#balance;
//   }
// }
// class CurrentAccount extends BankAccount {
//   transactionsLimit = 50000;
//   constructor(CustomerName, balance = 0) {
//     super(CustomerName, balance);
//   }
//   #calculateInterest(amount) {
//     console.log(`Calculating amount intrest for:${amount}`);

//     const interest = amount * 0.05;
//     console.log(`calculated interest is: ${interest}`);
//   }
//   takeBusinessLoan(amount) {
//     this.#calculateInterest(amount);
//     console.log(`Taking business loan is :${amount}`);
//   }
// }

// const ramAccount = new CurrentAccount("Ram", 5000);
// // ramAccount.setbalance(9000);
// // console.log(ramAccount.getbalance());
// ramAccount.takeBusinessLoan(20000);
// console.log(ramAccount);
