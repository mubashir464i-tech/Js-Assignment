var price = 25;
var quantity = 4;
var total = price * quantity;

var discount = 10;
var finalAmount = total - discount;

document.getElementById("answer").textContent = "Final amount: " + finalAmount;
