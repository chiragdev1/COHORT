// Select all form-group input elements.  
const inputValues = document.querySelectorAll(`.form-group .input`)
console.log(inputValues)

// Create a object formInput{name:'', age: , bio:''}
const formInput = {
   name:'',
   job:'',
   age: undefined,
   bio: ''
}


// Add change evenListener on all input elements
inputValues.forEach( (input) => {
   input.addEventListener('input', (e) => {
      updateFormObject(e.target.id, e.target.value)
      renderForm()
   })
})

function updateFormObject(id, value){
   const prop = id.substring(0,id.length-5)
   formInput[prop] = value
}

function renderForm(){
   for(let key in formInput){
      document.querySelector(`#${key}Display`).textContent = formInput[key] || 'Not provided'
   }
}