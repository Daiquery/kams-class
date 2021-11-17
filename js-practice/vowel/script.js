var person = document.getElementById("person");
var vowelCheck = document.getElementById("vowel");
var vowels = ["a", "e", "i", "o", "u"];

function vowelFirstLetter(){
    console.log(person.value);
    if (person.value != ""){
        firstLetter = person.value[0];
        for (vowel in vowels){
            if (vowels[vowel] === firstLetter.toLowerCase()){
                vowelCheck.textContent = "Your name begins with a vowel."
                console.log("This is a vowel! Vowel: " + vowel);
                break;
            } else {
                vowelCheck.textContent = "Your name does NOT begin with a vowel."
            }
        }

    } else {
        vowelCheck.textContent = "Enter a name.";
    }
}