/**
 * Write your challenge solution here
 */

const bulb = document.getElementById('bulb')
const bulbStatus = document.getElementById('status')
const toggleBtn = document.getElementById("toggleButton");

let isOn = false

function toggleBulb(){
   isOn = !isOn
   if(isOn){
      document.body.style.backgroundColor = 'black'
      bulb.classList.toggle('off')
      document.body.style.color = 'white'
      bulbStatus.innerText = "Status: On";
      toggleBtn.innerText = "Turn Off";
   }else {
      document.body.style.backgroundColor = "white";
      bulb.classList.toggle("off");
      document.body.style.color = "black";
      bulbStatus.innerText = "Status: Off";
      toggleBtn.innerText = "Turn On";
   }
}