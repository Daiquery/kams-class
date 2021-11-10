var items = ["This thing", "Another thing"];

function submit(){
    var x = document.getElementById("theinput");

console.log(x.value);
 items = [...items, x.value]; 
 
 document.getElementById("theinput").value = "";
 console.log(items);
}

function makeParagraphs(){
    for(i = 0; i < items.length; i++){
        // newNode = `${items[i]}\n`;
        var text = document.createTextNode(items[i])
        newNode = document.createElement("p");
        newNode.appendChild(text);
        
        document.getElementById("stuffholder").appendChild(newNode);
    }
    items = [];
}