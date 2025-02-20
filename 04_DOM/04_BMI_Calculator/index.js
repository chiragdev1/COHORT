const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const bmiOutput = document.getElementById('bmi-output')

function calculateBmi(){
   const height = Number(heightInput.value)/100
   const weight = Number(weightInput.value)
   
   const bmi = (weight / Math.pow(height, 2)).toFixed(2)
   const result = calResult(bmi)
   bmiOutput.innerHTML = `BMI: ${bmi} <p id="weight-class"></p>`;
   const weightClass = bmiOutput.querySelector('#weight-class')
   weightClass.innerText = result[0]
   weightClass.style.color = result[1]
}

function calResult(bmi){
   if(bmi < 16){
      return ['Severely underweight','red']
   }else if(bmi < 18.5){
      return ['Underweight', 'yellow']
   }else if(bmi < 25){
      return ['Normal Weight', 'limegreen']
   }else if(bmi < 30){
      return ['Overweight', 'yellow']
   }else if(bmi < 35){
      return ['Obese Class 1', 'orange']
   }else if(bmi < 40){
      return ['Obese Class 2', 'red']
   }else {
      return ["Obese Class 3", "#980101"]
   }
}