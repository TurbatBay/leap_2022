// console.log("bom js")
// console.log(window);
// window.alert("Hello")

//Window

// window.open("https://google.com", "Hello")

//CONFIRM

// window.confirm("Hello") //Cancel buttontoi alert

// let result = window.confirm("Do you want to Quit"); //cancel darwal false utga butsaana

// let result = confirm("Та устгахдаа итгэлтэй байна уу?")

// let message = result ? "Та ОК товчийг дарлаа" :
// "ta Cancel towshiig darsan";

// alert(message);
//PROMPT

//... prompt ur dun urgelj string baidag

//SET TIME OUT - UILDEL HIIHEESEE UMNU HULEEJ BAI GDG

let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");

function showAlert() {
    timeoutID = setTimeout(alert, 3000, "setTimeout Demo")
}

function clearAlert() {

}


cancelButton.addEventListener("click", () => {
    console.log("alert Button is clicked");

})
cancelButton.addEventListener("click", () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);
    
})

setTimeout(() => {
    console.log("Timeout is running")
},5000)

let counter = 0;

// setInterval(startInterval, 1000);
//start button hiiw
// let startButton = document.getElementById("startButton");
// startButton.addEventListener("click", () => {
//     console.log("start Button is clicked");

//     setInterval(startInterval, 1000);

//     function startInterval() {
//         let now = new Date();
//         let myTimer = document.getElementById("myTimer");
//         myTimer.innerHTML = now;
//         console.log(counter);
//         counter++;
//     }
    

// })

let startButton = document.getElementById("startButton");
startButton.addEventListener("click", runTimerInterval) 

    

    function runTimerInterval () {
        window.setInterval(startInterval, 1000);   //Ehluulj baigaa n  todorhoi hugatsaanii daraa dawtan hiih
    }


    function startInterval() {
        let now = new Date();
        let myTimer = document.getElementById("myTimer");
        // myTimer.innerHTML = now;
        console.log(counter);
        counter++; //negeer nemegdeed ywj bgaa uildel maani
        myTimer.innerHTML = now.getFullYear();  //eniig hiisneer My Timer gsn <p> n secondoor soligdono
    }
    





