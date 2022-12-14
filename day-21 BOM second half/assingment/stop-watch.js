let buttonTime = document.getElementById("buttonTime");
buttonTime.addEventListener("click", runTimerInterval) 

    

    function runTimerInterval () {
        window.setInterval(startInterval, 1000);   //Ehluulj baigaa n  todorhoi hugatsaanii daraa dawtan hiih
    }
    if (now.getMinutes < 10) {
        now.getMinutes = "0" + now.getMinutes;
    }

    function startInterval() {
        let now = new Date();
        let seconds = document.getElementById("seconds");
        let counter = 0;
        // myTimer.innerHTML = now;
        console.log(counter);
        counter++; //negeer nemegdeed ywj bgaa uildel maani
        hours.innerHTML = now.getHours();  //eniig hiisneer My Timer gsn <p> n secondoor soligdono
        minutes.innerHTML = now.getMinutes();
        seconds.innerHTML = now.getSeconds();
    }
    

