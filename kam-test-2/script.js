function something(){
    debugger;
    var a = document.getElementById('name').value;
    localStorage.setItem('name', a);
    document.getElementById('name').value = "";
    localStorage.clear();
    location.href = 'page2.html';
}