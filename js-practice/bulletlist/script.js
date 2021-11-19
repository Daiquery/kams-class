var listInput = document.getElementById("addthis");
var theList = document.getElementById("listToAddTo");

function listAdd(){
    listItem = document.createElement('li');
    listItem.value = listInput;
    
    theList.append(listItem);

}