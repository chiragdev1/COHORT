/**
 * Write your challenge solution here
 */
const digitalClockDisplay = document.querySelector(".digital-clock")
const dateDisplay = document.querySelector('.date')
const secondHand = document.querySelector(".hand.second")
const minuteHand = document.querySelector(".hand.minute")
const hourHand = document.querySelector(".hand.hour")

let currentDate = new Date(Date.now()).toLocaleString('en-IN',{
   weekday: 'long',
   day: 'numeric',
   month: 'long',
   year: 'numeric',
   timeZone: 'Asia/Kolkata'
}).toString()

// Updating time every second
setInterval(updateTime, 1001)

dateDisplay.textContent = currentDate

function updateTime() {
   let currentTime = new Date(Date.now())

   // Update the digital clock
   digitalClockDisplay.textContent = currentTime.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
   });

   // Update the analog clock

   const seconds = currentTime.getSeconds()
   const minutes = currentTime.getMinutes()
   const hours = currentTime.getHours()

   // Rotate the hands according to time
   secondHand.style.transform = `rotate(${seconds * 6}deg)`;
   minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
   hourHand.style.transform = `rotate(${ (hours * 30) + minutes * 0.5 }deg)`;
}