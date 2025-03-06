const taskList = document.getElementById("taskList");

const tasks = []
const taskCounter = counter()

function addTask(){
   
   // Take the input text
   const text = document.getElementById('taskInput').value.trim()
   // Check if input text is valid
   if(!text){
      alert('Enter valid task')
      return
   } 

   taskId =  taskCounter()
   // push the task in tasks
   tasks.push( {id:taskId ,desc: text, isCompleted: false})
   renderTasks()
   
   taskInput.value = ''
}

function renderTasks() {
   const emptyListDisplay = taskList.querySelector('.empty-list')

   if(tasks && emptyListDisplay) {
      emptyListDisplay.remove()
   }

   // Reset the list to avoid repetition
   taskList.innerHTML = ''
   tasks.forEach( (task) => {

      // create a li element and populate it dynamically using tasks []
      let li = document.createElement("li");
      li.classList.add("task-item");
      li.setAttribute("data-id", task.id);

      li.innerHTML = `
         <div class="left">
            <input type="checkbox" name="complete-checkbox" id="complete-checkbox" class="complete-checkbox">
            <span class="task-text">${task.desc}</span>
         </div>
         <button data-id=${task.id} class="delete-button">Delete</button>
      `;

      // Add eventListeners to checkbox and delete button
      li.querySelector("#complete-checkbox").addEventListener("click", (e) => {
         let targetTask = tasks.find(
            (task) => task.id == li.getAttribute("data-id")
         )
         targetTask.isCompleted = !targetTask.isCompleted;

         li.classList.toggle("completed")
         renderTaskStats()
      });

      li.querySelector(".delete-button").addEventListener("click", (e) => {
         const index = tasks.findIndex(
            (task) => task.id == e.target.getAttribute("data-id")
         );
         tasks.splice(index, 1);
         renderTasks()
         renderTaskStats()
      });

      renderTaskStats()
      taskList.appendChild(li);
   })
}

function renderTaskStats(){
   const tasksCountDisplay = document.querySelector("#totalTasks")
   const completedCountDisplay = document.querySelector("#completedTasks")

   tasksCountDisplay.innerText = `Total tasks: ${tasks.length}`
   completedCountDisplay.innerText = `Completed: ${tasks.filter( (task) => task.isCompleted === true).length}`;
}

function counter(){
   let count = 0

   return function(){
      return ++count
   }
}


