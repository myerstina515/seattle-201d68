/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var tableBody = document.querySelector('#cart tbody');
  // var tableBody = document.getElementsByTagName('tbody');
  console.log(cart.items);
  for (var i = 0; i < cart.items.length; i++){
    var trElement = document.createElement('tr');
    trElement.textContent = '';
    var deleteLink = document.createElement('td');
    deleteLink.textContent = 'Delete Link';
    trElement.appendChild(deleteLink);
    var quantity = document.createElement('td');
    quantity.textContent = cart.items[1];
    trElement.appendChild(quantity);
    var theItem = document.createElement('td');
    theItem.textContent = cart.items[0];
    trElement.appendChild(theItem);
    tableBody.appendChild(trElement);
  }
  
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
