fetch("https://dog.ceo/api/breeds/image/random").then(
    function(res){
        return res.json();
    }
).then(
    function(obj){
        console.log(obj["message"])
        document.getElementById("dog").innerHTML = "<img src=" + obj["message"] + "/>"
    }
)