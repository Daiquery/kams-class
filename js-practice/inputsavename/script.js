var nameInput = document.getElementById('name');
var userName;
var namePara = document.getElementById("savedname");

function saveName(){
    userName = nameInput.value;
    namePara.textContent = `Hello, ${userName}`;
}

nameInput.addEventListener('keydown', (key) => {
    if(key.code === "Enter"){
        saveName();
    }
})