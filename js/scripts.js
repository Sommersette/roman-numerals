//back-end logic (all calculation and processing happens here)

var totalString = function(input){
  var totalArray = [];
  var numeralArray = [];
  //input = "1325"
  var inputArray = input.split("");
  console.log(inputArray);
  //inputArray = ["1","3","2","5"]
  //some code to turn stings to nums
  //inputArray = [1,3,2,5]
  inputArray = inputArray.map(function(string){
    return parseInt(string);
  });
  console.log(inputArray);

  for(var i=0; i < inputArray.length; i+=1){
    if(i === 0){
      numeralArray = ["M"];
    }else if(i === 1){
      numeralArray = ["C","D","M"];
    }else if(i === 2){
       numeralArray = ["X", "L", "C"]
    }else if(i === 3){
       numeralArray = ["I", "V", "X"]
    }

    totalArray.push(processString(inputArray[i], numeralArray));
      console.log(totalArray);
  }


}


var processString = function(input, array){
  //
  if (input === 1) {
    return array[0];
  } else if (input === 2) {
    return array[0] + array[0];
  } else if (input === 3) {
    return array[0] + array[0] + array[0];
  } else if (input === 4) {
    return array[0] + array[1];
  } else if (input === 5) {
    return array[1];
  } else if (input === 6) {
    return array[1] + array[0];
  } else if (input === 7) {
    return array[1] + array[0] + array[0];
  } else if (input === 8) {
    return array[1] + array[0] + array[0] + array[0];
  } else if (input === 9) {
    return array[0] + array[2];
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
    var input = $("#roman-input").val();

    //pass input to back-end function
    var processedNumeral = totalString(input);
    //recieve processed string, and append to DOM

    $("#roman-output").append("<h1> Maybe you meant this: "+processedNumeral+ ", good citizen. </h1>");
  });
  // eventually return to user input.
});
