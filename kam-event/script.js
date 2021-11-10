function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
  
var sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
var pressSequence = [];
document.body.addEventListener("keyup", function(e){
  
    
    
    pressSequence = [...pressSequence, e.key];
    console.log(pressSequence);
    console.log(sequence);

    if (arrayEquals(pressSequence, sequence)){
        console.log("Cheater!");
        document.body.style.backgroundColor = "red";
        
    }
    
    
    document.getElementById("key").innerText = e.key;

})