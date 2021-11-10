
const burgers = {
    0: {
        name: "Butt Fire",
        price: 12,
        meat: "Ground prime beef",
        sauce: [
            "Mayo",
            "Ketchup",
            "Sriracha"
        ],
        veg: [
            "Ghost peppers",
            "Spinach",
            "Tomatoes",
            "Mushrooms",
            "Pepperjack cheese"
        ]
    }
    ,
    1: {
        name: "Bland Burger",
        price: 4,
        meat: "Pre-frozen patty",
        sauce: [
            "Mayo",
            "Ketchup",
        ],
        veg: [
            "None"
        ]
    }
}

console.log(burgIndex)
var burgIndex = Object.keys(burgers).length;

for (i = 0; i < burgIndex; i++){
    debugger;
    var paragraph = document.createElement("p");
    var burgerStuff = document.createTextNode(`${burgers[i]["name"]} ............... ${burgers[i]["price"]}`);
    paragraph.appendChild(burgerStuff);
    console.log(burgerStuff);
    document.body.appendChild(paragraph)
}


