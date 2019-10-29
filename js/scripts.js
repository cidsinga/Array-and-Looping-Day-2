$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());

    if (isNaN(number1) ||isNaN(number2) || number1 <= 0 || number2 <= 0){
      alert("Enter numbers greater than zero");

    } else {
      for (var index = number2; index <= number1; index += number2) {
        alert(index);
      }
    }
  });

});
