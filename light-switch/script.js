var light = true;

function toggle(){
    var button = document.getElementById("switch");
    if (light){
        console.log("Light is turning off!")
        document.querySelector("body").style.backgroundColor = "black"
        button.innerText = "OFF";
        light = false;
    } else {
        console.log("Light is turning on!")
        document.querySelector("body").style.backgroundColor = "white";
        button.innerText = "ON";
        light = true;
    }
   


}
