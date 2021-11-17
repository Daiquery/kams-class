var tokilla = document.getElementById("mockingbird");
var randomColor = "";
function genRandomColor(){
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    randomColor = `${r}, ${g}, ${b}`;
}

tokilla.addEventListener('mousedown', (e) => {
    genRandomColor();
    tokilla.style.color = `rgb(${randomColor})`;
});