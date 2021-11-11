var people = {
    0: {
        "name": "Leslie",
        "age": 40,
    },
    1: {
        "name": "Alex",
        "age": 22,
    },
    2: {
        "name": "Sam",
        "age": 12,
    }
}

// console.log(people[2]["age"]);
// console.log(people[1].age);

//average iterator
for(i = 0; i < people.length; i++){
    console.log(people[i]["name"]);
}

//cool person i guess
for (i in people){
    console.log(people[i].name);

    var para = document.createElement("p");
    para.style.fontSize = "64px";

    var text = document.createTextNode(people[i]["name"]);

    para.append(text);

    document.body.appendChild(para);
}