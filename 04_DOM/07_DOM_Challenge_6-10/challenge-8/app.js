// Write a function addToCart() to add item to cart[]
// cartItem = {name, price, quantity}
// Add remove button removeFromCart()

const cartItemsDisplay = document.querySelector('#cart-items')

const cart = []

function addToCart(name="", price){
   const item = {
      name: name,
      price: price,
      quantity: 1
   }
   cart.push(item)
   console.log('cart: ', cart)

   renderCart()
}

function renderCart() {
   // Check if cart is empty
   if(!cart){
      cartItemsDisplay.innerHTML = `
      <div class="empty-cart">Cart is empty</div>
      `;
      return;
   }
   // Clear the cart
   cartItemsDisplay.innerHTML = ""

   // Render each item from cart[]
   cart.forEach( item => {
      const div = document.createElement('div')
      div.classList.add('cart-item')

      div.innerHTML = `
         <p>${item.name}</p>
         <div class="quantity-controls">
            <button class="decrement">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increment">+</button>
            <p>${item.price * item.quantity}</p>
            <button class="remove-btn" onclick="removeFromCart()">Remove</button>
         </div>
      `;

      // Add eventListener to decrement button
      div.querySelector('.decrement').addEventListener('click', (e) => {
         const index =  cart.findIndex((order) => order.name === item.name)
         const quantity = cart[index].quantity
         if(quantity === 1){
            cart.splice(index, 1)
         }else {
            cart[index].quantity--
         }
         renderCart()
      })

      // Add eventListener to increment button
      div.querySelector(".increment").addEventListener("click", (e) => {
         const index = cart.findIndex((order) => order.name === item.name);
         ++cart[index].quantity;
         renderCart();
      });


      cartItemsDisplay.appendChild(div)
   })

   // calculate total price using reduce()
   const totalPrice = cart.reduce( (total, item) => {
      total += (item.price * item.quantity)
      return total
   }, 0)
   // Render Total price
   document.querySelector("#cart-total").innerHTML = `
   <h3>Total: $${totalPrice}</h3>
   `;
}