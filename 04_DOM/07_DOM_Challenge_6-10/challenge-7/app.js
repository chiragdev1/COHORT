// Algorithm 
// Create a list of all the accordion-item
// addEventListener to all the buttons
// onClick => 1. toggle active class on the target accordion-content and span in button
//            2. Remove active class from other items

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach( (item) => {
   item.querySelector('.accordion-button').addEventListener('click', (e) => {
      handleClick(e)
   })
})

function handleClick(e) {
   const item = e.target.parentElement
   const content = item.querySelector('.accordion-content')
   // Save the current activeStatus
   const isActive = content.classList.contains('active')

   // Remove the active class from all items
   accordionItems.forEach( accItem => {
      if(accItem.querySelector(".accordion-content").classList.contains("active")){
         accItem.querySelector(".accordion-content").classList.remove("active");
         accItem.querySelector('.arrow').classList.remove('active')

      }
      
   })

   if(!isActive) {
      item.querySelector(".accordion-content").classList.add('active')
      item.querySelector('.arrow').classList.toggle('active')
   }
}