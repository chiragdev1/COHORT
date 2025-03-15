// Select all boards
const boards = document.querySelectorAll('.board')
// Select all tasks
const tasks = document.querySelectorAll('.task')

// add drag event to each board
boards.forEach( (board) => {
   addDragOverEvent(board)
   const addTaskBtn = board.querySelector('.add-task-btn')
   const taskList = board.querySelector('.task-list')

   addTaskBtn.addEventListener('click', (e) => {
      const taskText = prompt('Enter new task')
      const li = createTaskLi(taskText)
      taskList.appendChild(li)
   })
   
})
// addDragStratEndEvents to each task
tasks.forEach( (task) => {
   task.addEventListener('dragstart', (e) => {
      task.classList.add('dragging')
   })
   task.addEventListener('dragend', (e) => {
      task.classList.remove('dragging')
   })
})

function createTaskLi(text){
   if(!text)return
   
   let li = document.createElement('li')
   li.innerText = text.trim()
   li.classList.add('task')
   li.setAttribute('draggable', true)
   return li
}

function addDragOverEvent(board){
   board.addEventListener('dragover', (e)=>{
      e.preventDefault()
      const draggingTask = document.querySelector('.dragging')
      const taskList = board.querySelector('.task-list')
      taskList.appendChild(draggingTask)
   })
}