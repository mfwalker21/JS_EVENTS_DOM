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
const clickMebutton = document.getElementById("clickMe");

// Add an event listener for "click" event
clickMebutton.addEventListener("click", function() {
    // Change the button text when clicked
    clickMebutton.innerText = "You clicked me!";
});



// Function to generate a random color
function getRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
    return randomColor;
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Attach the event listener to the button
document.getElementById("randomColorBtn").addEventListener("click", changeBackgroundColor);

function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
    }




// dark mode
    let darkModebutton = document.getElementById("darkModeBtn");
    let isDarkMode = false;
    darkModebutton.addEventListener("click", ()=> {
    if(isDarkMode) {
    document.body.classList.remove("dark");
    darkModebutton.textContent="Dark Mode";
    isDarkMode = false;
    }
    else{
    document.body.classList.add("dark");
    darkModebutton.textContent = "Light Mode";
    isDarkMode = true;
    }
    })