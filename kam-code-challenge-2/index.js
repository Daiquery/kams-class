// var links = [`<a href="https://www.google.com/">Link 1</a>`, `<a href="https://www.linkedin.com/">Link(ed) In</a>`, `<a href="https://www.yahoo.com/">Who even uses this</a>`]


// function giveLinks(){
//     document.getElementById('heresadiv').innerHTML = links;
// }


function addMe(){
    var newP = document.createElement('p');
    var newText = document.createTextNode("audhasihdfeiwasuhdkudasu j");
    newP.appendChild(newText);
    document.body.appendChild(newP);
}