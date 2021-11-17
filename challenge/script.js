var para = document.querySelectorAll("p");

para.forEach((p) => {
    p.textContent = "shit";
})

para.forEach(function(p) {
    p.textContent = "whatever"
})