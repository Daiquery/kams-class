function calculateBmi(){
    var heightRegex = /^(\d{1,2})[\']?((\d)|([0-1][0-2]))?[\"]?$/g.exec(document.getElementById("height").value);
    var feet = heightRegex[0];
    var inches = heightRegex[1];
    var weight = document.getElementById("weight").value;
    var height = (parseInt(feet) || 0) * 12 + (parseInt(inches) || 0);
    var type = document.getElementById("weightType");
    var bmi = document.getElementById("BMI");

    if (weight === "" || height === ""){
        type.textContent = "Please input a height and a weight."
        type.style.color = "red";
        return;
    } else {
        var BMI = weight / (height * height) * 703
        bmi.textContent = `${BMI}`
        if (BMI < 18.5){
            type.textContent = "You are underweight!"
            type.style.color = "red";
        } else if (BMI > 25){
            type.textContent = "You are overweight!"
            type.style.color = "red";
        } else {
            type.textContent = "You are at a normal weight."
            type.style.color = "green";
        }
        console.log(BMI);

    }
    // var BMI = weight / (height * height in inches) * 703
   
}

