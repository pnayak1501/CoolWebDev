let seconds =0;
let minutes =0;
let displaySec=0;
let displayMin=0;

let interval = null;
let status = "STOP";

function stopWatch(){
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
    }

    if(seconds<10){
        displaySec = "0"+seconds.toString();
    }
    else{
        displaySec = seconds;
    }
    if(minutes<10){
        displayMin="0"+minutes.toString();
    }
    else{
        displayMin=minutes;
    }
    if(minutes>=5){
        reset();
    }
    else{
    document.getElementById("display").innerHTML=displayMin+":"+displaySec;
    }
}


function startStop(){

    if(status === "STOP"){
        document.getElementById("display").style.color = "black";
        interval = window.setInterval(stopWatch,1000);
        document.getElementById("btn").innerHTML="PAUSE";
        status="START";
    }

    else{
        document.getElementById("display").style.color = "black";
        window.clearInterval(interval);
        document.getElementById("btn").innerHTML="START";
        status="STOP";
    }
}

function reset(){
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerHTML = "00:00";
        document.getElementById("display").style.color = "red";
        document.getElementById("btn").innerHTML = "RESET";
        status="START";
}