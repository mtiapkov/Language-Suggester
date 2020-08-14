//Business Logic
function javaScript (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 1){
    return true
  }
}
function Python (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3) === 2){
    return true
  }
}
function cSharp (num1, num2, num3) {
  if (Math.round((num1 + num2 + num3)/3)=== 3){
    return true
  }
}

//User Interface Logic
$(document).ready(function () {
  $("#questionsForm").submit(function (event) {
    event.preventDefault();
    const mealInput = parseInt($("#meal").val());
    const campingInput = parseInt($("#camping").val());
    const companyInput = parseInt($("#company").val());
    const petInput = parseInt($("#pet").val());
    const deviceInput = parseInt($("#device").val());

    if(javaScript(mealInput, campingInput, companyInput, petInput, deviceInput)){
      $("#result").html("<p>Your coding language is JavaScript</p>");
    } else if (Python(mealInput, campingInput, companyInput, petInput, deviceInput)){
      $("#result").html("<p>Your coding language is Python</p>");
    } else if (cSharp(mealInput, campingInput, companyInput, petInput, deviceInput)){
      $("#result").html("<p>Your coding language is C#</p>");
    } else {
      $("#result").html("<p>Your coding language is Ruby</p>")
    }
  })  
})  