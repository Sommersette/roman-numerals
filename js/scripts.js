//back-end logic (all calculation and processing happens here)
var processString = function(input){
  if (input === 1) {
    return "I"
  } else if (input === 2) {
    return "II"
  } else if (input === 3) {
    return "III"
  } else if (input === 4) {
    return "IV"
  } else if (input === 5) {
    return "V"
  } else if (input === 6) {
    return "VI"
  } else if (input === 7) {
    return "VII"
  } else if (input === 8) {
    return "VIII"
  } else if (input === 9) {
    return "IX"
  } else if(input === 10) {
    return "X"
  } else {
    return "INVALID INPUT";
  }
}









//front-end logic (user-facing, only for DOM manipulation)
$(document).ready(function(){
  $("#roman").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#roman-input").val());

    //pass input to back-end function
    var processedNumeral = processString(input);
    //recieve processed string, and append to DOM

    $("#roman-output").append("<h1> Maybe you meant this: "+processedNumeral+ ", good citizen. </h1>");
  });
  // eventually return to user input.
});
