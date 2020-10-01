(()=>{

    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    const container = document.querySelector(".container");

    const checkbox=document.getElementById("switch");
    const img = document.getElementById("shops");
    setInterval(()=>{
        const time= new Date();
        hours.textContent=time.getHours()< 9 ? `0${time.getHours()}`:time.getHours();
        minutes.textContent=time.getMinutes()< 9 ? `0${time.getMinutes()}`:time.getMinutes();
        seconds.textContent=time.getSeconds()< 9 ? `0${time.getSeconds()}`:time.getSeconds();
    },1000); 

    //checkbox lights
    checkbox.onchange = (event)=>{
        if(event.target.checked){
            img.src="../assets/Night_5.png";
        }
        else{
            img.src="../assets/Night_4.png";
        }
    }

})();

