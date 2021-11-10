var iterated = 0;
function hideIt() {
    debugger;
    var length = document.getElementsByTagName("p").length;
  for (i = 0; i < length; i++) {
    randomize = setInterval(() => {
        var random = Math.floor(Math.random()) * length;
        console.log(Math.random(length));
        console.log(random);
      document.getElementsByTagName("p")[i].innerText = "";
      
    }, 300);
  }
}

hider = setTimeout(function () {
  console.log("Yo it works");
  hideIt();
  clearTimeout(hider);
}, 3000);
