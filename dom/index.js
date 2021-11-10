var p1;
var p2;
var p2holder = document.getElementById("p2holder")
var p2NumNode;

function submit(){
    p1 = document.getElementById("p1num").value;
    console.log(p1);
  

    if(p1 == !null || p2NumNode == null && p1 >= 1 && p1 <= 5){
       p2NumNode = document.createElement("input");
       p2NumNode.setAttribute("id", "p2num");
       p2BtnNode = document.createElement("button")
       p2BtnNode.setAttribute("onclick", "submit2()")
       p2BtnNode.setAttribute("type", "number")
       p2BtnNode.innerHTML = "Player 2, guess a number between 1 and 5"
       p2holder.appendChild(p2NumNode);
       p2holder.appendChild(p2BtnNode);
       document.getElementById("p1num").value = "";
       document.getElementById("p1num").setAttribute("disabled", true)
    }
}

function submit2(){
    winlose = document.createElement("h1");
    document.getElementById("holders").appendChild(winlose);
        if(p1 === p2NumNode.value){
            
            winlose.innerHTML = "You WIN!"

            console.log("You win.");
        } else {
          
            winlose.innerHTML = "You LOSE!"
            console.log("You lose!!!");
        }
        p2NumNode.setAttribute("disabled", true)
        p2BtnNode.setAttribute("disabled", true)
        return;
 


}

