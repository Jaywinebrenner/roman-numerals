
// var num = ();
// var numM = ();
// var numD
function convertatron(num) {

  for (var z = num; z >= 0; z--){
    if (z >= 100){
      var c = parseInt(z / 100);
      z = (z % 100);
    }
    if (z >= 50){
      var l = parseInt(z / 50);
      z = (z % 50);
    }
    if (z >= 10){
      var x = parseInt(z / 10);
      z = (z % 10);
    }
    if (z >= 5){
      var v = parseInt(z / 5);
      z =(z % 5);
    }
    if (z >= 1){
      var i = parseInt(z / 1);
      z = (z % 1);
    }
    if (z === 0){
      return("C".repeat(c)) + ("L".repeat(l)) + ("X".repeat(x)) + ("V".repeat(v)) + ("I".repeat(i));
    }
  }
}



$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("input#inputField").val());
    var result = convertatron(number);

    $("ul").append("<li>" + result + "</li>")
  });
});
