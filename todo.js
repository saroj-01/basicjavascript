const title = document.querySelector("#title");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

showAllTasks();
function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerHTML = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerHTML = value.description;
    innerDiv.append(span);

    const Btn = document.createElement("button");
    Btn.setAttribute("class", "btnDelete");
    Btn.innerText = "-";

    Btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      showAllTasks();
    });

    div.append(Btn);
    container.append(div);
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  showAllTasks();

  (title.value = ""), (description.value = "");

  console.log(tasks);
});

// set time out and set interval
// const myfunc = () => {
//   console.log("hello world");
// };
// setTimeout(myfunc, 5000);
// const Btnremove = document.querySelector("#remove");
// const clearId = setTimeout(() => {
//   console.log("hello world");
// }, 5000);

// Btnremove.addEventListener("click", () => {
//   clearTimeout(clearId);
// });

const clearId = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleTimeString());
  document.write(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(clearId);
}, 5000);
