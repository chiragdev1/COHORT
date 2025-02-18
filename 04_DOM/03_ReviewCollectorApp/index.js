const reviewInput = document.getElementById("review-input");
const reviewList = document.getElementById("reviews-list");

const stars = Array.from(document.getElementsByClassName('star'))
let rating = 0

stars.forEach( (star) => {
   console.log(star)
   star.addEventListener('click', (e)=>{
      rating = Number(star.id)
      renderRating(rating)
   })
})

function addNewReview(){
   const reviewText = reviewInput.value;
   const date = Date.now();
   const temp = new Date(date)
   const formattedDateIST = temp.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
   }); 
   console.log(formattedDateIST)

   // Create a new li
   let li = document.createElement("li");
   li.className = "review";
   li.innerHTML = `
      <p class="review-date">${formattedDateIST}</p>
      <div id="starRating">
            
            <svg xmlns="http://www.w3.org/2000/svg"  class="list-star star" id="1" viewBox="0 0 576 512">
               <path 
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg id="2" xmlns="http://www.w3.org/2000/svg"  class="list-star star"  viewBox="0 0 576 512">
               <path 
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  class="list-star star" id="3" viewBox="0 0 576 512">
               <path 
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  class="list-star star" id="4" viewBox="0 0 576 512">
               <path 
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg"  class="list-star star" id="5" viewBox="0 0 576 512">
               <path 
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
         </div>
         <p class="review-text">${reviewText}</p>
   `;

   const listStars = Array.from(li.getElementsByClassName("list-star"));

   for (let i = 0; i < rating; i++) {
      listStars[i].style.fill = "yellow";
   }

   reviewList.prepend(li);

   reviewInput.value = "";
   rating = 0;
   renderRating(rating);
}

function renderRating(rating){
   stars.forEach(star=> {
      star.style.fill = 'gray'
   })
   for(let i=0;i<rating;i++){
      stars[i].style.fill = 'yellow'
   }
}
