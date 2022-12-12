let myButton = document.getElementById('myButton');
console.log(myButton);
function changeBackgroundColorGreen() {
    myButton.style = "background-color:green"
}

// changeBackgroundColor();
// myButton.addEventListener("click", changeBackgroundColorGreen);
function changeBackgroundColorRed() {
    myButton.style = "background-color:red"
}
myButton.addEventListener("click", changeBackgroundColorRed);

if (myButton.addEventListener("click", changeBackgroundColorGreen)) {
    let add = 0;

}

let color = "green";
function changeBackgroundColors() {
    console.log("Clicked");
    if (color === "green") {
        color = "White";
        myButton.style = `backround-color: ${color}`;


    } else {
        myButton.style = `Background-color: ${color}`;
        color = "green"
    }
}

// myButton.addEventListener("click" chan())


/// ODOOO ARROW OOR HIIH GJ BN

let arrowFunc = () => {

}

myButton.addEventListener('click',() => {
    myButton.style = 'background-color:red;'
})


registerButton.disabled = true;