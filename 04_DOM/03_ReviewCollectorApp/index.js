const reviewInput = document.getElementById("review-input");
const reviewList = document.getElementById("reviews-list");


function addNewReview(){
   const reviewText = reviewInput.value

   // Create a new li
   let li = document.createElement('li')
   li.className = 'review'
   li.innerText = reviewText

   reviewList.prepend(li)

   reviewInput.value = ''
}
