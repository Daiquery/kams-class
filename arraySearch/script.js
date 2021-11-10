function checkEm() {
  document.getElementById("random").textContent = "";
  document.getElementById("finder").textContent = "";
  const array = ["pizza", "charcoal", "eggplant"];
  var finder = document.getElementById("finder").value;
  var textNode = document.createTextNode("");

  for (i = 0; i < array.length; i++) {
    console.log(array.length);
    if (array[i] != finder && array[i] === array[array.length - 1]) {
      textNode.nodeValue = `${finder} is not in the array.`;
      break;
    } else if (array[i] === finder) {
      textNode.nodeValue = `${finder} is in the array. Index position: ${i}`;

      break;
    }
  }
  document.getElementById("random").appendChild(textNode);
}
