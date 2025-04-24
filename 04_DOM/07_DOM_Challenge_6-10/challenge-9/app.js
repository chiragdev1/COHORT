const panel = document.querySelector('.panel')

// Write a function openMenu that add active class to panel and closeMenu() that removes it.
// Add eventListener to document for click, check the target to close the panel
// Add click event to X button on the panel

function openMenu() {
   panel.classList.add('active')
}
function closeMenu() {
   panel.classList.remove('active')
}

document.addEventListener('click', (e) => {
   const target = e.target
   if (
      !e.target.classList.contains("panel") &&
      !e.target.classList.contains("menu-item") &&
      !e.target.classList.contains("toggle-btn")
   ) {
      closeMenu();
   }
   console.log(target)
})
