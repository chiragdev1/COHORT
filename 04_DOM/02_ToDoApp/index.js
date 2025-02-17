const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const tasksList = document.getElementById("task-list");

function addTaskToList(){
   const value = taskInput.value

   // Create a li element
   let li = document.createElement('li')
   li.className = 'task'
   li.innerText = value

   // Create and Add X button to li
   let btn = document.createElement('button')
   btn.className = 'btn'
   btn.innerText = 'X'

   // Add eventlistener to the X button
   btn.addEventListener('click', ()=>{
      li.remove()
   })

   // Append the button to li
   li.appendChild(btn)

   // Append the li to the list
   tasksList.appendChild(li)

   taskInput.value = ''
}

function toggleTheme(){
   const color = document.body.style.backgroundColor
   const themeBtn = document.getElementById("theme-btn");

   if(!color || color == 'white'){
      document.body.style.backgroundColor = "black";
      document.body.style.color = 'white'
      themeBtn.innerText = 'Light Mode'
   }else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black'
      themeBtn.innerText = 'Dark Mode'
   }
}

function deleteAllTasks(){
   tasksList.innerText = ''
}