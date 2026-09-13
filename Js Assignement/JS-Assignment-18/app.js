var text1 = "25";
var text2 = "8.5";

var integerNumber = parseInt(text1);
var decimalNumber = parseFloat(text2);
var total = integerNumber + decimalNumber;

document.getElementById("numbers").textContent = "Total: " + total;
