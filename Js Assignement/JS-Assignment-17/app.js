function showRandomNumber() {
    var randomNumber = Math.random() * 10;
    var finalNumber = Math.floor(randomNumber) + 1;

    document.getElementById("randomValue").textContent = "Random number: " + finalNumber;
}
