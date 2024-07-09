// Get the pop-up modal
var popup = document.getElementById("popup");

// Get the close button
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Show the pop-up when the page loads
window.onload = function() {
    popup.style.display = "block";
}

// Close the pop-up when the close button is clicked
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Close the pop-up when the user clicks outside the pop-up content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}