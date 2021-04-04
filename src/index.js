
// This response is adapted from the official solution

document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //the form:
  const newTaskForm = document.getElementById("create-task-form");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

//input field(s)
const newTaskDescription = document.getElementById("new-task-description");

//ul where new tasks will live on the DOM
const newTaskUl = document.getElementById("tasks");

const createNewTask = event => {
  //stop form from trying to submit
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  newTaskUl.appendChild(task);
};



  // My initial attempt at an answer:

  // your code here
  // const text = document.getElementById("text");
  // const tasks = document.getElementById("tasks");
  //   console.log("hello!");

  // document.addEventListener("submit", function(evt) {
  //   console.log("hello2!");
  //   const taskText = text.innerText;
  //   let li = document.createElement('li');
  //   let button = document.createElement('button');
  //   li.textContent = taskText;
  //   tasks.appendChild(li);
  //   evt.preventDefault();
  // });

  // document.addEventListener("submit", AddTask );

  // function AddTask(evt) {
  //   console.log("hello!");
  //   const taskText = text.innerText;
  //   let li = document.createElement('li');
  //   let button = document.createElement('button');
  //   li.textContent = taskText;
  //   tasks.appendChild(li);
  //   evt.preventDefault();
  // }
