function removeMe(){
    var rItem = document.getElementsByTagName("li")[0];

    var containerElem = rItem.parentNode;

    containerElem.removeChild(rItem);
}