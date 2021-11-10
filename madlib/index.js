var noun;
var verb;
var adjective;
var adverb;
var madlib = document.getElementById("madlib");
var madlibComplete = false;
var hasNoun;
var hasVerb;
var hasAdj;
var hasAdv;




function submit(word) {
  if (word === "noun") {
    noun = document.getElementById("noun").value;
    document.getElementById("nounbtn").setAttribute("disabled", true);
    hasNoun = true;
  } else if (word === "verb") {
    verb = document.getElementById("verb").value;
    document.getElementById("verbbtn").setAttribute("disabled", true);
    hasVerb = true;
  } else if (word === "adjective") {
    adjective = document.getElementById("adjective").value;
    document.getElementById("adjbtn").setAttribute("disabled", true);
    hasAdj = true;
  } else if (word === "adverb") {
    adverb = document.getElementById("adverb").value;
    document.getElementById("advbtn").setAttribute("disabled", true);
    hasAdv = true;
  }
  if (hasNoun && hasVerb && hasAdj && hasAdv) {
      madlibComplete = true;
  }
  if (madlibComplete === true){
    var y = document.createTextNode(`When I went to school, there was a(n) ${adjective} ${noun} that was ${verb} ${adverb}.`);
    madlib.appendChild(y);
  }
  
}

