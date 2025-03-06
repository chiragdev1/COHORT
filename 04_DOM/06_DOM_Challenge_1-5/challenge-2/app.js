const mainHeading = document.getElementById("mainHeading");

const colorButtons = document.querySelectorAll('.color-btn')

colorButtons.forEach( (btn) => {
   btn.addEventListener('click', (e) => {
      const color = e.target.textContent.toLowerCase()
      const bgColor = window.getComputedStyle(e.target).backgroundColor
      console.log(bgColor);
      
      if(color == 'reset'){
         mainHeading.style.color = 'black'
      }else{
         mainHeading.style.color = bgColor
      }
   })
})