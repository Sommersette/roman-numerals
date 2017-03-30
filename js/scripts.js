//back-end logic (all calculation and processing happens here)


var processString = function(input){
  var romNums = ["I", "V", "X"]
  if (input === 1) {
    return romNums[0];
  } else if (input === 2) {
    return romNums[0] + romNums[0];
  } else if (input === 3) {
    return romNums[0] + romNums[0] + romNums[0];
  } else if (input === 4) {
    return romNums[0] + romNums[1];
  } else if (input === 5) {
    return romNums[1];
  } else if (input === 6) {
    return romNums[1] + romNums[0];
  } else if (input === 7) {
    return romNums[1] + romNums[0] + romNums[0];
  } else if (input === 8) {
    return romNums[1] + romNums[0] + romNums[0] + romNums[0];
  } else if (input === 9) {
    return romNums[0] + romNums[2];
  // } else if(input === 10) {
  //   return "X"
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
