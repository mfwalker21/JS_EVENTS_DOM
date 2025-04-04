//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){
    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
    })

   //Get the element that will show our key code
const directionEl = document.getElementById("direction");
// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {
// When a key is pressed, the element with the id of direction will show the message
directionEl.innerText = `The Key you pressed is ${event.key}`;
});


// Access the button element with id "clickMe"
const button = document.getElementById("clickMe");

// Add an event listener for "click" event
button.addEventListener("click", function() {
    // Change the button text when clicked
    button.innerText = "You clicked me!";
});