function calculateArea(length, width) {
    return length * width;
}

function showArea() {
    var area = calculateArea(6, 4);
    document.getElementById("area").textContent = "Area = " + area;
}
