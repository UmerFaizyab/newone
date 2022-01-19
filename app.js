var name1 = document.getElementById("number");
var answer = document.getElementById("answer");
function check(e) {
  e.preventDefault();
  if (number.value > 500) {
    answer.value = "Greater than 500";
  } else if (number.value == 500) {
    answer.value = "Equal to 500";
  } else {
    answer.value = "Less than 500";
  }
}
