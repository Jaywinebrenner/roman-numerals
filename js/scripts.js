
// var num = ();
// var numM = ();
// var numD
function convertatron(num) {



    if (num >= 4000 || (isNaN(num))){
        return ("Enter a number between 1 and 3,999, please and thanks.");
    }
    if (num >= 1000){
      var m = parseInt(num / 1000);
      num = (num % 1000);
    }
    if (num >= 500){
      var d = parseInt(num / 500);
      num = (num % 500);
    }
    if (num >= 100){
      var c = parseInt(num / 100);
      num = (num % 100);
    }
    if (num >= 50){
      var l = parseInt(num / 50);
      num = (num % 50);
    }
    if (num >= 10){
      var x = parseInt(num / 10);
      num = (num % 10);
    }
    if (num >= 5){
      var v = parseInt(num / 5);
      num =(num % 5);
    }
    if (num >= 1){
      var i = parseInt(num / 1);
      num = (num % 1);
    }
    if (num === 0){
      var stringResult = ("M".repeat(m)) + ("D".repeat(d))+ ("C".repeat(c)) + ("L".repeat(l)) + ("X".repeat(x)) + ("V".repeat(v)) + ("I".repeat(i));
      // return stringResult;
    }
    if (stringResult.includes("DCCCC")); {
    stringResult = stringResult.replace("DCCCC", "CM");
    }
    if (stringResult.includes("LXXXX")); {
    stringResult = stringResult.replace("LXXXX", "XC");
    }
    if (stringResult.includes("VIIII"));{
    stringResult = stringResult.replace("VIIII", "IX");
    }
    if (stringResult.includes("CCCC"));{
      stringResult = stringResult.replace("CCCC", "CD");
    }
    if (stringResult.includes("IIII"));{
      stringResult = stringResult.replace("IIII", "IV");
    }
    if (stringResult.includes("XXXX"));{
      stringResult = stringResult.replace("XXXX", "XL");
    }

    return stringResult;
    // var strArray = stringResult.split(" ");
    //
    // if (stringResult.includes("DCCC")){
    //   var supersplice= stringResult.splice((stringResult.indexOf("DCCC")), 4, "CM");
    //   return supersplice;

    }








$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("input#inputField").val());
    var result = convertatron(number);

    $("ul").append("<li>" + result + "</li>")
  });
});
