

const form = document.getElementById("create-task-form");
const inputValue = document.querySelector('#new-task-description');
const toDoList = document.getElementById('task');


document.addEventListener("DOMContentLoaded", () => {
  
  form.addEventListener('submit', newTask);
});


const newTask = (e) => {
  e.preventDefault();
  
  let toDoList = document.getElementById('new-task-description').value;
  newAppendedTask(toDoList)
  e.target.reset()


};
const newAppendedTask = (task) =>{

  let li = document.createElement('li')
  li.textContent = task
  document.getElementById('task').appendChild(li)
}
  