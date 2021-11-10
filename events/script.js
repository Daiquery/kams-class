function someFunction(){
    document.body.style.backgroundColor + "red";
}

function scold(){
    document.getElementById('msg').innerText = "THIEF!";
}

// document.getElementById("myInput").addEventListener("input", parrot());

function parrot(){
    var x = document.getElementById("myInput").value;
    document.getElementById("msg").innerText = x;
}